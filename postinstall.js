
const shell = require('shelljs');
const appRoot = require('app-root-path').path;
const fs = require('fs-extra');
const replaceString = require('replace-string');

//let target = "/usr/lib/systemd/system/jblast.service";
let target = "jblast.service";

// read template, add approot and write to service dir
let content = fs.readFileSync(appRoot+"/jblast.service.template","utf-8");
content = replaceString(content,"[[approot]]",appRoot);
fs.writeFileSync(target,content);

console.log("Installation in:",appRoot);
console.log(appRoot+"/jblast.service");
console.log("Manually copy it to",target);
//console.log(content);