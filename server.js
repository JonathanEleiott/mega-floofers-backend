import express from 'express';
const app = express();

import client from './db/client.js';
client.connect();

app.get('/me', (req, res, next) => {
  res.send("all good in bunny land");
});

import bunnyRouter from './api/bunnies.js'
app.use(`/api/v1/bunnies`, bunnyRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});