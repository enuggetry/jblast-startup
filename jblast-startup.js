#!/usr/bin/env node

const execa = require('execa');
const sleep = require('system-sleep');
const fs = require('fs-extra');

process.chdir('/home/ec2-user/jblast-startup'); 
fs.appendFileSync("./jblast-startup.log","starting... "+new Date().toISOString()+"\n");

process.chdir('/home/ec2-user/galaxy'); 
execa.shell('sh run.sh').then(result => {
    console.log(result.stdout);
});

sleep(10000);

process.chdir('/home/ec2-user/jbserver'); 
execa.shell('sails lift > jblast-startup.log').then(result => {
    console.log(result.stdout);
});
