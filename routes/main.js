const express = require('express')
const path = require('path')

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + './client/build')
  });
});

module.exports = router;