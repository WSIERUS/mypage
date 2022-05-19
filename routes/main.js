const express = require('express');
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + '/client/build')
  });
});

router.get('/toform', (req, res) => {
  console.log('toform')
  res.end()
})

router.post('toform', (req, res) => {
  res.redirect('/form')
  console.log('toform routing to form')
})

module.exports = router