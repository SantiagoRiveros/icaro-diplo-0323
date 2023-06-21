const fs = require('fs');

const read = () => JSON.parse(fs.readFileSync('./tasksData.json', 'utf-8'))
module.exports = read