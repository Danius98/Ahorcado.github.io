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

let palabraUsada;
let letrasUtilizadas;
let errores;
let intentos;

function selectWord() {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
    alert(selectedWord)
}

function drawHangMan(){
    hanged.canvas.width = 180;
    hanged.canvas.height = 300;
    hanged.scale(30, 30);
    hanged.clearRect(0, 0, canvas.width, canvas.height);
    hanged.fillRect(0, 9, 4, 1);
    hanged.fillRect(1, 0, 1, 9);
    hanged.fillRect(2, 0, 4, 1);
    hanged.fillRect(5, 1, 1, 1);
}

function startGame(){
    letrasUtilizadas = [];
    errores = 0;
    intentos = 0;
    letrasContenedor.innerHTML = '';
    letrasUsadas.innerHTML = '';
    boton__inicio.style.display = 'none';
    drawHangMan();
    selectWord();
}



function addLetter(letter){
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    letrasUtilizadas.appendChild(letterElement);
}