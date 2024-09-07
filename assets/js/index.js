// //repaso de la clase pasada

// let alumnos = ["Juan", "Lorena", "David"]

// //length --> longitud del arreglo
// // console.log(alumnos.length)

// //push --> agrega un elemento al final
// alumnos.push("Rodolfo")
// console.log(alumnos)

// //pop --> elimina un elemento del final
// alumnos.pop()
// console.log(alumnos)

// //shift --> elimina un elemento al principio
// alumnos.shift()
// console.log(alumnos)

// //unshift --> agrega un elemento al principio
// alumnos.unshift("Ghiselle")
// console.log(alumnos)

// //splice --> elimina, agrega o remplaza elementos de un array
// alumnos.splice(1,1,"Erick")
// console.log(alumnos)

//filter, includes, concat 


// let numeros = [ 10, 15, 20, 25, 30, 25, 40]
// let mayoresVeinte = numeros.filter(function(num) {
//     return num > 20
// })


// console.log("numeros", numeros)
// console.log("mayores de Veinte", mayoresVeinte)


//-----------------------------------------

// includes()

// let alumnos = ["Juan", "Lorena", "David"]
// let contieneLorena = alumnos.includes("Lorena")


// console.log(contieneLorena) //true


//-----------------------------------------
// Concat
// let alumnosDelInicio = ["Juan", "Lorena", "David"]
// let alumnosAgregados = ["Erick", "Ghiselle", "Rodolfo"]

// let alumnosUnidos = alumnosDelInicio.concat(alumnosAgregados)
// console.log(alumnosUnidos)



// ----------------------Trabajo en grupo ---------------

// Ejercicio Grupo 1: Combinación de filter, includes y concat
// Consigna:
// Dado un array de objetos que representan personas, filtra aquellas que tienen al menos un "hobby" que incluya la palabra "correr". Luego, concatena los nombres de esas personas en un solo array.

// let personas = [
//     { nombre: "Juan", hobbies: ["leer", "correr", "escribir"] },
//     { nombre: "María", hobbies: ["nadar", "bailar"] },
//     { nombre: "Pedro", hobbies: ["correr", "jugar videojuegos"] },
//     { nombre: "Lucía", hobbies: ["cocinar", "dibujo"] }
// ];

// let filtrado = personas.filter(item => item.hobbies.includes("correr")).map((n)=>n.nombre)
// console.log(filtrado)

// let nombres =""
// filtrado.forEach(fil => {
//    nombres=nombres.concat(fil.nombre)
// });
// console.log(nombres)



// Ejercicio Grupo 2: Filtrado y concatenación de películas favoritas
// Consigna:
// Dado un array de objetos que representan personas, filtra aquellas que tienen como película favorita "Inception". Luego, concatena los nombres de esas personas en un solo array.

// let personas = [
//     { nombre: "Ana", peliculasFavoritas: ["Inception", "Titanic"] },
//     { nombre: "Carlos", peliculasFavoritas: ["Matrix", "Avatar"] },
//     { nombre: "Luis", peliculasFavoritas: ["Inception", "Gladiator"] },
//     { nombre: "Sofía", peliculasFavoritas: ["El Señor de los Anillos", "Harry Potter"] }
// ];

 
// let personasQueLesGusta = personas.filter(persona => persona.peliculasFavoritas.includes("Inception")).map((p) => p.nombre);
// console.log(personasQueLesGusta); //map
 
// unidos = personasQueLesGusta.concat(personas)
// console.log(unidos)




// Ejercicio grupo 3: Filtrado de productos con una etiqueta específica
// Consigna:
// Dado un array de objetos que representan productos, filtra aquellos que tienen la etiqueta "nuevo". Luego, concatena los nombres de esos productos en un solo array.

// let productos = [
//     { nombre: "Laptop", etiquetas: ["tecnología", "nuevo"] },
//     { nombre: "Teléfono", etiquetas: ["tecnología"] },
//     { nombre: "Camiseta", etiquetas: ["ropa", "nuevo"] },
//     { nombre: "Reloj", etiquetas: ["accesorios"] },
//   ];
   
//   let filtrado = productos.filter((el) => el.etiquetas.includes("nuevo"));
   
//   console.log(filtrado);
   
//   let newArray = [];
   
//   for (let i = 0; i < filtrado.length; i++) {
//     newArray.push(filtrado[i].nombre);
//   }   
// console.log(newArray);

   //este for se puede mejorar con un map

//    let mapFiltrado = filtrado.map(function(p){
//     return p.nombre
//    })

 //  //let mapFiltrado = filtrado.map((p) => p.nombre)

//    console.log(mapFiltrado);
 

// Ejercicio grupo 4: Filtrado de libros por autor específico
// Consigna:
// Dado un array de objetos que representan libros, filtra aquellos que fueron escritos por "J.K. Rowling". Luego, concatena los títulos de esos libros en un solo array.

// let libros = [
//     { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
//     { titulo: "Cartas del diablo a su sobrino", autor: "C.S. Lewis" },
//     { titulo: "Harry Potter y la cámara secreta", autor: "J.K. Rowling" },
//     { titulo: "El Hobbit", autor: "J.R.R. Tolkien" }
// ];
 
// let jk = libros.filter(function(n){
//     return n.autor === "J.K. Rowling"
// }).map(function(l) {
//     return l.titulo })
// console.log(jk)

//sin el map seria asi
// let titulo = []
// for (let i = 0; i < jk.length; i++) {
//     titulo.push(jk[i].titulo);
// }

// console.log(titulo)

//------------------------------------map------------

// const numeros = [ 2, 4, 6, 8]
// const duplicado = numeros.map(function(n) {
//     return n * 2
// })

// console.log(duplicado)



// const nombres = ["ana", "carlos", "luis", "sofia"];

// const nombreMayuscula = nombres.map((nom) =>nom.toUpperCase()) //es lo mismo que el for siguiente

// let mayuscula = []
// for (let i = 0; i < nombres.length; i++) {
//     mayuscula.push(nombres[i].toUpperCase())
    
// }

// console.log(nombreMayuscula)





// -----------------------------

// Ejercicio 2: Productos disponibles en stock
// Consigna: Tienes un array de objetos que representan productos en una tienda. Cada producto tiene un nombre, un precio y una propiedad enStock que es un booleano. 
// Crear un array con el nombre y el precio del producto

const productos = [
    { nombre: "Laptop", precio: 800, enStock: true },
    { nombre: "Teclado", precio: 20, enStock: false },
    { nombre: "Monitor", precio: 150, enStock: true },
    { nombre: "Mouse", precio: 10, enStock: true }
];

const nombrePrecio = productos.map (p => `${p.nombre} - $${p.precio}`)
console.log(nombrePrecio)



// ["Laptop - $800", Teclado - 20, "Monitor - $150", "Mouse - $10"]