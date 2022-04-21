const express = require("express");
const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

// var mainRoute = require('./routes/main.js');

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + '/client/build')
  });
});


// app.use('/', mainRoute);

app.use(express.static(__dirname + '/client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});