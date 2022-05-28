const letrasUsadas = document.querySelector(".letras__usadas");
const letrasContenedor = document.querySelector(".letras__contenedor");
const boton__inicio = document.querySelector(".boton__inicio");

let canvas = document.querySelector("canvas");
let hanged = canvas.getContext('2d');
hanged.canvas.width = 10;
hanged.canvas.height = 10;

const bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
]

function drawHangMan(){
    hanged.canvas.width = 240;
    hanged.canvas.height = 280;
    hanged.scale(20, 20);
    hanged.clearRect(0, 0, canvas.width, canvas.height);
    hanged.fillRect(0, 7, 4, 1);
    hanged.fillRect(1, 0, 1, 8);
    hanged.fillRect(2, 0, 3, 1);
    hanged.fillRect(4, 1, 1, 1);
}

function startGame(){
    drawHangMan();
}

let palabraUsada;
let letrasUsada;
let errores;
let intentos;

function addLetter(letter){
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    letrasUsadas.appendChild(letterElement);
}