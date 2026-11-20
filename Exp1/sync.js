console.log("1. Program Started");
setTimeout(() => {console.log("2. setTimeout  Executed") },4000);
setImmediate(() => {console.log("3. setImmediate Executed")});
process.nextTick(()=> {console.log( "4. process.nextTick Executed")});
console.log("5. Finished");