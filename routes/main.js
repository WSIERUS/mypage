const express = require('express')
const router = express.Router();


router.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router