#!/usr/bin/env node

const execa = require('execa');
const sleep = require('system-sleep');
const fs = require('fs-extra');

fs.appendFileSync("/home/centos/jblast-startup/jblast-startup.log","starting... "+new Date().toISOString()+"\n");

process.chdir('/home/centos/galaxy'); 
execa.shell('sh run.sh').then(result => {
    console.log(result.stdout);
});

sleep(10000);

process.chdir('/home/centos/jbserver'); 
execa.shell('sails lift').then(result => {
    console.log(result.stdout);
});
