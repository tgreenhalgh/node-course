const fs = require('fs');

// write
const book = { title: 'Ego is the Enemy', author: 'Ryan Holiday' };
const bookJSON = JSON.stringify(book);
fs.writeFileSync('01-json.json', bookJSON);

// read
const dataBuffer = fs.readFileSync('./01-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log('data', data);
