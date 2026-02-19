import client from '../client.js';

export const createBunny = async({ bunnyName, userId, description, imgURL }) => {
  try {
    const { rows: [bunny] } = await client.query(`
      INSERT INTO bunnies (name, user_id, description, img_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;  
    `, [bunnyName, userId, description, imgURL]);
    
    return bunny;
  } catch(err) {
    console.log(`ERROR CREATING BUNNY:`, err);
  }
}

export const getAllBunnies = async() => {
  try {
    const { rows: allBunnies } = await client.query(`
      SELECT * FROM bunnies;
    `);
    return allBunnies;
  } catch(err) {
    console.log(`ERROR GETTING BUNNIES FROM DB:`, err);
    throw new Error(`Error getting bunnies from DB`);
  }
}