const express = require('express');
const app = express();
const port = 7000; // your server port, you can change it yourself
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`)
});