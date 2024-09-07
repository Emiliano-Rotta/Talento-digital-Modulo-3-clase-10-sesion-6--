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


// Ejercicio Grupo 2: Filtrado y concatenación de películas favoritas
// Consigna:
// Dado un array de objetos que representan personas, filtra aquellas que tienen como película favorita "Inception". Luego, concatena los nombres de esas personas en un solo array.

// let personas = [
//     { nombre: "Ana", peliculasFavoritas: ["Inception", "Titanic"] },
//     { nombre: "Carlos", peliculasFavoritas: ["Matrix", "Avatar"] },
//     { nombre: "Luis", peliculasFavoritas: ["Inception", "Gladiator"] },
//     { nombre: "Sofía", peliculasFavoritas: ["El Señor de los Anillos", "Harry Potter"] }
// ];


// Ejercicio grupo 3: Filtrado de productos con una etiqueta específica
// Consigna:
// Dado un array de objetos que representan productos, filtra aquellos que tienen la etiqueta "nuevo". Luego, concatena los nombres de esos productos en un solo array.

// let productos = [
//     { nombre: "Laptop", etiquetas: ["tecnología", "nuevo"] },
//     { nombre: "Teléfono", etiquetas: ["tecnología"] },
//     { nombre: "Camiseta", etiquetas: ["ropa", "nuevo"] },
//     { nombre: "Reloj", etiquetas: ["accesorios"] }
// ];


// Ejercicio grupo 4: Filtrado de libros por autor específico
// Consigna:
// Dado un array de objetos que representan libros, filtra aquellos que fueron escritos por "J.K. Rowling". Luego, concatena los títulos de esos libros en un solo array.

// let libros = [
//     { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
//     { titulo: "Cartas del diablo a su sobrino", autor: "C.S. Lewis" },
//     { titulo: "Harry Potter y la cámara secreta", autor: "J.K. Rowling" },
//     { titulo: "El Hobbit", autor: "J.R.R. Tolkien" }
// ];