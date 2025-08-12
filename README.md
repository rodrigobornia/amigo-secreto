# Challenge-Amigo-secreto-alura-cursos ![Badge en Desarollo](https://img.shields.io/badge/STATUS-FINALIZADO-green)


El propósito de este desafío es poner en práctica los conceptos adquiridos sobre lógica de programación.  
Para ello, hemos proporcionado el código HTML y CSS, lo que permitirá que el enfoque se centre completamente en aspectos fundamentales sobre lógica de programación como variables, condicionales, funciones y listas, entre otros.

---

# Juego de Amigo Secreto

Este proyecto es un sencillo juego de "Amigo Secreto" en JavaScript.  
Permite agregar amigos, validar entradas, y sortear un amigo aleatoriamente.
<img width="825" height="583" alt="image" src="https://github.com/user-attachments/assets/f5461782-8646-4f7e-b32a-7fc671d297f2" />

---
## 👀 Cómo ver el proyecto en GitHub

1. 📂 **Abre el repositorio** en GitHub, por ejemplo:  
   `https://github.com/rodrigobornia/amigo-secreto`

2. 📄 **Navega hasta el archivo** `index.html` o `README.md` para ver el código y la documentación.

3. 🔍 **Revisa el código** directamente en GitHub con resaltado de sintaxis.

4. ⚙️ **Descarga o clona** el repositorio para probarlo localmente usando:  
   ```bash
   git clone https://github.com/rodrigobornia/amigo-secreto.git
   
5. 🌐 **ABRE EL ARCHIVO index.html** en tu navegador para usar el juego.



## Cómo usar el Juego

1. Abrir el archivo index.HTML.
2. Ingresar nombres en el campo de texto y hacer clic en **Añadir**.
3. Agregar al menos dos amigos para poder sortear.
4. Hacer clic en **Sortear amigo** para seleccionar uno al azar.
5. El nombre sorteado aparecerá y la lista se limpiará para comenzar de nuevo.

---

## Código JavaScript principal

```javascript
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1

let listaNombres = [];
function agregarAmigo(){
    const input = document.getElementById('amigo');
     let nombre = (input?.value || '').trim();
    
     if (!nombre) {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }
    listaNombres.push(nombre);
    limpiarCaja();
    console.log(listaNombres) ;
    mostrarNombres()
}

//Función para limpiar la caja al introducir un nombre
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

//2 Función para mostrar los nombres almacenados en pantalla
function mostrarNombres () {
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML ="";
    //Bucle que recorre la lista para mostarla en pantalla
    for (let i = 0; i < listaNombres.length; i++) {
        let nombreLista = document.createElement("li");
        nombreLista.textContent = listaNombres[i];
        mostrarLista.appendChild(nombreLista);
    }
}
//3 //Función para sortar los nombres con pseudoaleatoriedad

function sortearAmigo () {
    //Si no hay nombres
    if (listaNombres.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }
    //Si solo hay 1 nombre
    if (listaNombres.length === 1) {
    alert("Añade más nombres para poder sortear.");
    return;
  }

//Se selecciona 1 nombre de forma aleatoria de acuerdo a la lista
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    let nombreSorteado = listaNombres[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 Tu amigo secreto es: ${nombreSorteado}`;
    //Se quita el nombre sorteado de la lista
    let indice = listaNombres.indexOf(nombreSorteado);
    if (indice !== -1) {
        listaNombres.splice(indice, 1);
    mostrarNombres();
    }

}
