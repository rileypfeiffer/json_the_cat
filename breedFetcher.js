const args = process.argv;
let arg = args.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Breed not found.");
  }
});

