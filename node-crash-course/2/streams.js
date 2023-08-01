const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk) => {
//   console.log("---------- NEW -----------")
//   console.log(chunk)
//   writeStream.write('\n NEW LINE \n');
//   writeStream.write(chunk);
// })


/// PIPE
readStream.pipe(writeStream);