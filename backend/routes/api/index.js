const router = require('express').Router();

const pixabayQueryRouter = require('./pixabay-queries');

router.use('/queries', pixabayQueryRouter);

module.exports = router;
