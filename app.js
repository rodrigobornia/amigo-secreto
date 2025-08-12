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