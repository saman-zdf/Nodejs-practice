const { readFile } = require('fs');

console.log('Started a frist task');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    conslo.log(err);
    return;
  }
  console.log(result);
  console.log('Completed first task');
});
console.log('starting next task');

// starting operatin system process
