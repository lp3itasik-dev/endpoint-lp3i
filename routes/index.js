const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.send('Endpoint LP3I 🇮🇩');
});

module.exports = router;
