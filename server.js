import express from 'express';
const app = express();

app.get('/me', (req, res, next) => {
  res.send("all good in bunny land");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});