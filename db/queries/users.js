import client from '../client.js';

export const createUser = async({ username, password }) => {
  try {
    const { rows: [user] } = await client.query(`
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING *;
    `, [username, password]);
    return user;
  } catch (err) {
    console.log(`ERROR CREATING USER:`, err);
  }
}

