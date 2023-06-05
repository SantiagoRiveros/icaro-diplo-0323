const tasksData = require('../tasksData')

function editF(title, newDesc){
    let newObj = {title: title, desc: newDesc}
    console.log(newObj)
    return newObj
}

module.exports = editF