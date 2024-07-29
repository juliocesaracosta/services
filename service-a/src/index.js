const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello, User World!');
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});