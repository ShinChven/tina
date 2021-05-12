#!/usr/bin/env node

// export * from './module';

import nginxConfGen from './template-generators/nginx';

const args = process.argv.slice(2);
const [cmd] = args;

if (cmd==='nginx') {
    nginxConfGen();
}

