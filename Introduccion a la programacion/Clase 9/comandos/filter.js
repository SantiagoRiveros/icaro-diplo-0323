const read = require("../CRUD/read")

module.exports = (text) => read().filter((tasks) => tasks.title.includes(text))

