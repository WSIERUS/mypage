const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/form', (req, res) => {
  console.log('form')
  res.sendFile('index.html', {
    root: path.join(__dirname + '/client/build')
  })
})

router.get('/sendform', (req, res) => {
  console.log('sendform')
})

router.post('/sendform', (req, res) => {
  console.log(
    `Imię : ${req.body.name}`,
    `NIP : ${req.body.nip}`,
    `Branża : ${req.body.typebusiness}`,
    `Numer telefonu : ${req.body.phonenumber}`,
    `Email : ${req.body.email}`
  )
  res.redirect('/')
})

module.exports = router