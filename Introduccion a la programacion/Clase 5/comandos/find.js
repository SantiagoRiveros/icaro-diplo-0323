const tasksData = require("../tasksData")

function findF(argument){
    //seteo una variable en false
    var bool = false;
    //recorro el array
    for(let i = 0; i < tasksData.length; i++){
        //si el indice actual, es igual al argumento que entra a la funcion, seteo la variable en true
        if(tasksData[i].title === argument){
            bool= true
        }
    }
    //si no la encontro nunca devuelve false
    console.log(bool)
    return bool;
}

module.exports = findF

/* function find(argument){

    const isTitle= (element) => element.title === argument
    return tasksData.some(isTitle)
} */