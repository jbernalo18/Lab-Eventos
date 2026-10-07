/**
## Tarea 1: Modificar el estilo del texto del párrafo

Al hacer clic en el botón `botonEstilo`, la fuente, 
el tamaño de fuente y el color del texto del párrafo `parrafo`
 deben cambiar.

**Pista:** Usa `element.style.propiedad = 'valor'` para cambiar 
los estilos.
 */

const botonEs = document.getElementById('botonEstilo'); /* Variable del boton*/
const textoMod = document.getElementById('parrafo'); /*Variable del texto am modificar.*/

botonEs.addEventListener("click", (e) => {   /*Escuchador de evento click */
    textoMod.style.color = "blue"; /* Cambio de color con funcion flecha*/
    textoMod.style.fontFamily = "italic"; /*Cambio de fuente */
    textoMod.style.fontSize = "40px"; /*Cambio de tamaño */
});

 /**
## Tarea 2: Obtener valores del formulario

Escribe una función que, al enviar el formulario, 
obtenga los valores de los inputs `fname` y `lname` 
y los imprima en la consola.

**Pista:** Usa `preventDefault()` para evitar que el formulario
 se recargue. Usa `document.forms` o `document.getElementById('form1')` 
 para acceder a los inputs.
  */

 const formulario = document.getElementById('form1'); //creamos variable formulario y aceedemos mediante el id
 const nombre = formulario.elements['fname']; //formulario.elements accedemos con el name fname
 const apellido = formulario.elements['lname']; //formulario.elements accedemos con el name lname

 formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // se usa preventDefault para evitar que el form se recarge
    console.log(nombre.value); //imprimimos el valor de nombre
    console.log(apellido.value); // imprimimos el valor de apellido
}); 


/*
## Tarea 3: Mostrar alerta con información de enlaces

Al hacer clic en el botón `botonEnlaces`, 
debe aparecer una alerta (`alert()`) con:
- El número total de enlaces en la página.
- El primer enlace de la página.
- El último enlace de la página.

**Pista:** Usa `document.querySelectorAll('a')` 
para obtener todos los enlaces. 
Usa `.length` para el número total,
 `[0]` para el primero 
 y `[length - 1]` para el último.
 */


 const botonEnl = document.getElementById('botonEnlaces'); 

 botonEnl.addEventListener("click" (e) =>{
    
 });