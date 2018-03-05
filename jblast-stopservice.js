#!/usr/bin/env node

const shell = require('shelljs');

shell.exec('pkill node');
shell.exec('pkill python');
