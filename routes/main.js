const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Route działa')
})

outer.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router