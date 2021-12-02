// Globals - NO WINDOW !!!

// __dirname = path to current directory
// __filename = file name
// require = function to use nodules (CommonJS)
// module = info about current nodule (file)
// process - info about environment(env) whre the program is being executed

console.log(__dirname);
const oneS = setInterval(() => {
  return 'Hello World';
}, 1000);
console.log(oneS);

clearInterval(oneS, 10000);
