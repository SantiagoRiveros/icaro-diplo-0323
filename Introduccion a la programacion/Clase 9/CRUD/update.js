const read = require("./read");
const writeJSON = require("./writeJSON");

const update = (title, desc) => {
    writeJSON(read().map((task) => {
        if(task.title === title){
            return {
                ...task,
                desc
            }
        }
        return task;
    }))
}

module.exports = update