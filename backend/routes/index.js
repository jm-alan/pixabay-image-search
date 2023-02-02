const express = require('express');

const { isProduction } = require('../config/server');
const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter);

if (isProduction) {
  const { resolve } = require('path');
  const buildFolder = resolve(__dirname, 'frontend');
  const rootHTML = resolve(buildFolder, 'index.html');

  router.use(express.static(buildFolder));

  router.get(/(\/)|(^(?!\/?api).*)/, (req, res) => {
    res.sendFile(rootHTML);
  });
}

module.exports = router;
