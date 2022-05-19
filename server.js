const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const mainRouter = require('./routes/main')

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

app.use(express.static(__dirname + '/client/build'));

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});