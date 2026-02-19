import client from './client.js';
import { createUser } from './queries/users.js';
import { createBunny } from './queries/bunnies.js'

const syncAndSeed = async() => {
  console.log(`CONNECTING TO DB`);
  await client.connect();
  console.log(`SUCCESSFULLY CONNECTED TO DB`);

  console.log(`CREATING USERS`);
  for(let userCount = 1; userCount <= 4; userCount++) {
    const newUser = await createUser({ 
      username: `user${userCount}`,
      password: `password${userCount}`
    });
    console.log(`NEW USER:`, newUser);

    console.log(`CREATING BUNNIES FOR USER ${userCount}`);

    if(userCount === 1) {
      const newBunny = await createBunny({
        bunnyName: `Sir George`,
        userId: newUser.id,
        description: `Fastest bunny in town!`,
        imgURL: `https://tinyurl.com/4kap93hj`
      });

      console.log(`NEW BUNNY:`, newBunny);
    } else if (userCount === 2) {
      for(let bunnyCount = 1; bunnyCount <= 3; bunnyCount++) {
        const newBunny = await createBunny({
          bunnyName: `Fluffy${bunnyCount}`,
          userId: newUser.id,
          description: `Fluffy${bunnyCount} placed number ${bunnyCount + 1} in the race!`,
          imgURL: `https://tinyurl.com/4kap93hj`
        });

        console.log(`NEW BUNNY:`, newBunny);
      }
    }
  }
  console.log(`SUCCESSFULLY CREATED USERS`);

  console.log(`CREATING BUNNIES NOT TIED TO USERS`);
  for(let bunnyCount = 5; bunnyCount <= 10; bunnyCount++) {
    const newBunny = await createBunny({
      bunnyName: `Floofer${bunnyCount}`,
      userId: null,
      description: `Floofer${bunnyCount} placed number ${bunnyCount + 1} in the race!`,
      imgURL: `https://tinyurl.com/4kap93hj`
    });
    console.log(`NEW BUNNY:`, newBunny);
  }
  console.log(`SUCCESSFULLY CREATED BUNNIES NOT TIED TO USERS`);

  console.log(`DISCONNECTING FROM DB`);
  await client.end();
  console.log(`SUCCESSFULLY DISCONNECTED`);
}

syncAndSeed();