const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files)=>{
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.touch('terminal-commands.js', (err) => {
    if (err) throw err;
    console.log('File Created');
  })
};

module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands', (error, files) => {
    if (err) throw err;
    console.log('Directory Created')
  })
};
