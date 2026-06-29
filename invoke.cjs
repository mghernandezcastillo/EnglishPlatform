const { spawn } = require('child_process');
const fs = require('fs');

const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./out.log', 'a');

const child = spawn('npx', ['-y', 'tsx', 'generate-missing-slides.ts'], {
  detached: true,
  stdio: ['ignore', out, err]
});

child.unref();
console.log('Started in background with pid', child.pid);
