const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require('./routes/main')
const formRouter = require('./routes/form')

app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

app.use('/', mainRouter)
app.use('form', formRouter)

app.use(express.static(__dirname + '/client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});