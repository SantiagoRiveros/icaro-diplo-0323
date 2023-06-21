const read = require ('../CRUD/read')

module.exports = (title) => read().some((task) =>  task.title === title)