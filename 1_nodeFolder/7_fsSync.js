const {readFileSync, writeFileSync} = require('fs')
console.log("start");

const first = readFileSync('./content/first.txt', 'utf8')
console.log(first);
const second = readFileSync('./content/subfolder/test.txt', 'utf8')
console.log(second);

writeFileSync('./content/third.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' })
console.log("end");
console.log("new code begin");