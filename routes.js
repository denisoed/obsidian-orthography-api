const express = require('express');
const { Grammarly } = require('@stewartmcgown/grammarly-api');

const router = express.Router();

router.get('/check', async (req, res) => {
  const formattedText = req.query.text ? req.query.text.replace(/;|\/|\?|:|@|&|=|\+|$/g, '%') : '';
  const grammarly = new Grammarly();
  const results = await grammarly.analyse(formattedText);
  res.send(results);
});

module.exports = router;
