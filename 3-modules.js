// node uses CommonJS, every file is module (by default)
// Modules = every file in node is module
const sayHi = require('./5-utils');
const names = require('./4-names');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
const { items, singlePerson } = data;

const { saman, danyal } = names;

// sayHi(saman);
// sayHi(danyal);
