#!/usr/bin/node
const cmdArgs = process.argv;
let total = 0;
cmdArgs.forEach(cmdArg => {
  total ++;
});
 if (total > 1) {
  console.log(cmdArgs[2]);
} else if (total < 1)  {
  console.log('No argument');
}
