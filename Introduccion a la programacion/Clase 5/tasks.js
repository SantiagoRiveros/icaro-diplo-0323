const editF = require('./comandos/edit')
const filterF = require('./comandos/filter')
const findF = require('./comandos/find')
const listF = require('./comandos/list')
const returnF = require('./comandos/return')


// node tasks.js find codear
//[   0,  1,       2,  3   ]

switch(process.argv[2]){
    case 'find':
        console.log(findF(process.argv[3]))
        break;
    case 'edit':
        console.log(editF(process.argv[3], process.argv[4]))
        break;
    case 'filter':
        console.log(filterF(process.argv[3]))
        break;
    case 'return':
        console.log(returnF(process.argv[3]))
        break;
    case 'list':
        console.log(listF())
        break;
}