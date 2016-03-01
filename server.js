'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
