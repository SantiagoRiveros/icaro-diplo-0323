const read = require('../CRUD/read')

module.exports = (title) => {  let tasks = read().find((task) => task.title === title);
    if(tasks) return tasks.desc
    return null
}

