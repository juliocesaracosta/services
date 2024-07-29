const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Hello, Product World!');
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});