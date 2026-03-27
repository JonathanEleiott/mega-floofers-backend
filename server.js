import express from 'express';
const app = express();

if (process.env.NODE_ENV === "production") {
  options.ssl = { rejectUnauthorized: false };
}


import client from './db/client.js';
await client.connect();

import cors from 'cors';
app.use(cors());

app.get('/me', (req, res, next) => {
  res.send("all good in bunny land");
});

import bunnyRouter from './api/bunnies.js'
app.use(`/api/v1/bunnies`, bunnyRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});