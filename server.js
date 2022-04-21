const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('views engine', 'html');

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname + '/build/public')
  });
});

app.use(express.static(path.resolve(__dirname, '../build/public')));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});