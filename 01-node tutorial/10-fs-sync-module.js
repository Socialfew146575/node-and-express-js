const { readFileSync,writeFileSync, write } = require("fs")
console.log("start");
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');



console.log(first,second);
console.log("done with the task");
writeFileSync('./content/result-sync.txt',`This is the  result from the writeFilesync method of the fs module.\n Here is the result :${first} ${second}`);

console.log("starting the next task");

