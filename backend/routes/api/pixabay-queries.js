const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const limitKeys = require('../../utils/middleware/limitPermittedKeys');
const stripFalsyKeys = require('../../utils/middleware/stripFalsyKeys');

const validColors = ['grayscale', 'transparent', 'red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'lilac', 'pink', 'white', 'gray', 'black', 'brown'];
const validColorSet = new Set(validColors);

router.post(
  '/',
  limitKeys(
    'q',
    'lang',
    'id',
    'image_type',
    'orientation',
    'category',
    'min_width',
    'min_height',
    'colors',
    'editors_choice',
    'safesearch',
    'order',
    'page',
    'per_page'
  ),
  stripFalsyKeys(),
  asyncHandler(async (req, res) => {
    const { body } = req;

    let queryString = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}`;

    if (!body.q || (body.q.length > 100)) {
      return res.status(400).json({
        errors: [
          'Bad search term',
          'A search term must be provided, and must 100 characters or less, including spaces'
        ]
      });
    }

    body.colors ??= [];

    if (!Array.isArray(body.colors) || !body.colors.every(color => validColorSet.has(color))) {
      return res.status(400).json({
        errors: [
          'Invalid query configuration',
          'Colors must be an array of strings, whose valid values are, exhaustively, as follows:',
          validColors.join(', ')
        ]
      });
    }

    body.colors = body.colors.join(',');

    for (const key in body) {
      queryString += `&${key}=${encodeURIComponent(body[key])}`;
    }

    const response = await fetch(queryString);
    const rateLimit = response.headers.get('X-RateLimit-Limit');
    const requestsRemaining = response.headers.get('X-RateLimit-Remaining');
    const resetTimer = response.headers.get('X-RateLimit-Reset');

    // If we receive specifically a 429, per the documentation, we've exceeded our
    // rate limit
    if (response.status === 429) {
      return res.status(429).json({
        errors: [
          'API rate limit exceeded',
          `Pixabay API will resume accepting requests in ${resetTimer} seconds`
        ]
      });
    // If we get literally any other error from the Pixabay API, we likely aren't
    // equipped to handle it, and should send our generic "oops" response on the
    // frontend
    } else if (response.status.between(400, 599)) {
      console.error('Received bad response from Pixabay API');
      console.error(`Status: ${response.status}`);
      console.error(response.statusText);
      return res.sendStatus(500);
    }
    // Otherwise, we're good to parse the response

    const data = await response.json();

    res.json({ data, rateLimit, requestsRemaining, resetTimer });
  }));

module.exports = router;
