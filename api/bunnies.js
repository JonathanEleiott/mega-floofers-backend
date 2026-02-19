import express from 'express';
const bunnyRouter = express.Router();

import { getAllBunnies } from '../db/queries/bunnies.js';

bunnyRouter.get('/', async(req, res, next) => {
  try {
    const allBunnies = await getAllBunnies();
    res.send(allBunnies);
  } catch(err) {
    console.log(`ERROR RETRIEVING BUNNIES`)
    next(err);
  }
});

export default bunnyRouter;