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

function selectWord() {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    palabraUsada = word.split('');
    alert(palabraUsada)
}

function drawWord(){
    palabraUsada.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter'); // añade la clase letter para su edicion en css
        letterElement.classList.add('hidden'); // añade la clase hidden para su edicion en css
        letrasContenedor.appendChild(letterElement);
    });
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
    drawWord();
    document.addEventListener('keydown', letterEvent);
}

function endGame(){
    document.removeEventListener('keydown', letterEvent);
    boton__inicio.style.display = "block";
}

function addLetter(letter){
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    letrasUsadas.appendChild(letterElement);
}

function correctLetter(letter){
    const { children } = letrasContenedor;
    alert(children)
    for(let i = 0; i < children.length; i++){
        if(children[i].innerHTML === letter){
            children[i].classList.toggle('hidden');
            intentos++
        }
    }
    if(intentos === palabraUsada.length) endGame();
}

function letterInput(letter){
    if(palabraUsada.includes(letter)){
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    letrasUtilizadas.push(letter);
}

function letterEvent(event){
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !letrasUtilizadas.includes(newLetter)){
        letterInput(newLetter);
    }
}

