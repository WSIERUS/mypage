const express = require("express");
const path = require('path')

const PORT = process.env.PORT || 3001;

const app = express();

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

app.post('/form', (req, res) => {
  console.log(req,res)
  res.end()
})

app.use(express.static(__dirname + '/client/build'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});