const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + '/client/build')
  });
});

app.get('/form', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + '/client/build')
  })
})

app.post('/sendform', (req, res) => {
  console.log(
    `Imię : ${req.body.name}`,
    `NIP : ${req.body.nip}`,
    `Branża : ${req.body.typebusiness}`,
    `Numer telefonu : ${req.body.phonenumber}`,
    `Email : ${req.body.email}`
  )
  res.sendStatus(200)
})

app.use(express.static(__dirname + '/client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});