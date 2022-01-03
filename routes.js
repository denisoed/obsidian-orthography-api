const express = require('express');
const { Grammarly } = require('@stewartmcgown/grammarly-api');

const router = express.Router();

router.get('/check', async (req, res) => {
  const text = req.query.text.replace(/:/g, ' ');
  const grammarly = new Grammarly();
  const results = await grammarly.analyse(text);
  res.send(results);
});

module.exports = router;
