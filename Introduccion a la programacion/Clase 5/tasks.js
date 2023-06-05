const editF = require('./comandos/edit')
const filterF = require('./comandos/filter')
const findF = require('./comandos/find')
const listF = require('./comandos/list')
const returnF = require('./comandos/return')


// node tasks.js find codear
//[   0,  1,       2,  3   ]

switch(process.argv[2]){
    case 'find':
        findF(process.argv[3])
        break;
    case 'edit':
        editF(process.argv[3], process.argv[4])
        break;
    case 'filter':
        filterF(process.argv[3])
        break;
    case 'return':
        returnF(process.argv[3])
        break;
    case 'list':
        listF()
        break;
}