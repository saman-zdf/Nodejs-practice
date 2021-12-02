const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromist = util.promisify(readFile);
// const writeFilePromist = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-min-grenade.txt',
      `THIS IS AWESOME: ${first}, ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText('./content/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
