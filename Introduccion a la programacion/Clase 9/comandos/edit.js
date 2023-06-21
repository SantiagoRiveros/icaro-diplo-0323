const tasksData = require('../tasksData')

function editF(title, newDesc){
    let newObj = {title: title, desc: newDesc}
    return newObj
}

module.exports = editF