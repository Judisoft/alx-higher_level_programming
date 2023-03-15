#!/usr/bin/node
const cmdArguments = process.argv.length;
if (cmdArguments < 3) {
  console.log('No argument');
} else if (cmdArguments === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
