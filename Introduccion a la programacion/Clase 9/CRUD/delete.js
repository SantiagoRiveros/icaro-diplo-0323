const writeJSON = require("./writeJSON");
const read = require('./read')

module.exports = (title) => writeJSON(read().filter((task) => task.title !== title))