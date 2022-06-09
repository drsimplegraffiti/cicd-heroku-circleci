const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3456;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/deployed', (req, res) => {
  res.send('deployed page..');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
