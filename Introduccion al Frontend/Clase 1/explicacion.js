// Etiquetas en HTML
// < nombre de etiqueta> <--- Etiqueta de apertura
// </ nombre de etiqueta> <--- etiqueta de cierre

//ejemplo:
// quiero hacer un encabezado que diga "VAMOS MESSI"
// <h1>VAMOS MESSI</h1>

// SELECTORES

// Supongamos, que queremos aplicar un mismo estilo, a todos los elementos <h2> de nuestra pagina
// Como lo hacemos?

// Selector de elementos
// h1{...}
// La sintaxis es ASI:
// elemento{estilo del elemento}

// Selector por ID
// el id, EN GENERAL, tiene un valor unico para cada elemento
// No es obligatorio que un elemento tenga un id
// pero se usa, para seleccionar un elemento en especifico
// Supongamos que hay 1 solo paragraph en el que queremos aplicar un estilo

// <p id="messi">vamos messi</p>

// ¿Como lo seleccionamos?
// #messi{...}
// Osea:
// #idDelElementoASeleccionar{estilo a aplicar}

// Selector por clase (Probablemente el mas usado)
// a los elementos HTML le podemos pasar un atributo que se llama Class
// ¿Para que se suele utilizar esto?
// Supongamos que tenemos varios elementos <p> que queremos darle estilo
// pero NO son todos los <p> de la pagina

// ¿Como hacemos para aplicar el mismo estilo a varios?

// <p class="messiCampeon">Messi sos mi idolo</p>

// ¿Como lo seleccionamos?
// .messiCampeon{...}
// .claseAEstilizar{estilo a aplicar}