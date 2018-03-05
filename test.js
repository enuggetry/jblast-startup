const replaceString = require('replace-string');
const fs = require('fs-extra');

let content = fs.readFileSync("jblast.service.template","utf-8");
content = replaceString(content,'[[approot]]','happy');
console.log(content);

 
//const input = 'My friend has a 🐑. I want a 🐑 too!';
//var out = replaceString(input, 'friend', 'foe');
//console.log(out);