/**
 * Ejercicio propuesto 1
 * Cambiar el texto de todos los botones de una página a "Clic aquí". 
 */
/*
let botonUnico = document.getElementById("botonUnico");
botonUnico.addEventListener("click", () =>{
    document.querySelectorAll("button").forEach(button => button.textContent="Click aquí");
});
*/









/**
 * Ejercicio propuesto 2
 * Crear un evento que cambie el fondo del body al hacer clic en un botón.
 */
/*
let btnBody = document.getElementById("botonBody");
btnBody.addEventListener("click", () => {
    let rojo = Math.floor(Math.random() * (255 + 1));
    let verde = Math.floor(Math.random() * (255 + 1));
    let azul = Math.floor(Math.random() * (255 + 1));
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
});
*/










/**
 * Ejercicio propuesto 3
 * Agregar un párrafo al principio de un contenedor <div>.
 */

let btnCapa = document.getElementById("botonCapa");
btnCapa.addEventListener("click", () => {
    let parrafo = document.createElement("p");
    let capa = document.getElementById("capa1");
    parrafo.textContent = 'Esto es un texto cualquiera';
    capa.appendChild(parrafo);
})