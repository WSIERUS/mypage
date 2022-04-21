const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const mainRoute = require('./routes/main')

app.use('/', mainRoute)

app.use(express.static(path.resolve(__dirname, '../client/build')));