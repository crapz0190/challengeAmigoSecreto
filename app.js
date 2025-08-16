// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaNombres = [];
const listaNombresSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    listaNombres.push(nombre);

    document.getElementById("amigo").value = "";
    mostrarAmigos();

    document.getElementById("amigo").focus();
}

function mostrarAmigos() {
    let listaAmigosUI = document.getElementById("listaAmigos");
    listaAmigosUI.innerHTML = "";

    listaNombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigosUI.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length < 3) {
        alert("Necesitas al menos 3 amigos para hacer el sorteo.");
        return;
    }

    if (listaNombresSorteados.length === listaNombres.length) {
        alert("¡Todos los amigos ya han sido sorteados!");
        listaNombresSorteados.length = 0;
        document.getElementById("resultado").innerHTML = "";
        return;
    }

    let nombreSeleccionado;
    let indiceAleatorio;

    do {
        indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
        nombreSeleccionado = listaNombres[indiceAleatorio];

    } while (listaNombresSorteados.includes(nombreSeleccionado));

    listaNombresSorteados.push(nombreSeleccionado);

    let listaAmigosUI = document.getElementById("listaAmigos");
    listaAmigosUI.innerHTML = "";

    let resultadoUI = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `¡El amigo secreto sorteado es: ${nombreSeleccionado}! 🎉`;
    resultadoUI.appendChild(li);
}

