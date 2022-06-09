# Ahorcado.github.io

# Explicacion de las funciones

Con el motivo de tener un entendiemiento del proyecto para comprenderlo en un futuro, describo a continuación las funciones, lo que hacen y pseudo código

# const bodyParts

Son las partes del cuerpo que añadiremos cuando no acertemos en la palabra

# function drawHangman

La variable canvas accede al canvas en el html y la variable hanged al contexto del canvas. Declaramos que el lugar dónde se mostrará la horca tenga un ancho de 210px con una altura de 300px. Tendrá una escala de 30pixeles y el espacio delimitado para ello el ancho y alto anteriormente mencionado. Con el hanged accedemos al canvas y con fillrect delimitamos la horca.

# function selectWord

La variable word accede a la constante words en el archivo palabra.js, el Math.floor redondeara el número hacia abajo, el Math.random escogerá una palabra al azar en el indice dónde esté ubicada multiplicada por la la longitud del arreglo words, y cada palabra seleccionada será automáticamente convertida en mayúscula.
La variable palabraUsada ahora será la palabra al azar elegida separa por un espacio.

# function drawWord

Con el forEach accedemos a la palabraUsada iterada, la constante letterElement nos creará un span en el html, que a su vez cada letra que creamos en el span se convierte en mayúscula. Le añadimos al span que creamos la clase letter y hidden, las cuales en el css se definirá los estilos de la letra en el span y si se muestra resepctivamente. LetterElement será hijo de letrasContenedor que éste último hace referencia al div con class letras__contenedor, por lo que está función se mostrará aca

# function letterEvent

En esta función, declaramos una variable la cual newLetter será el evento (letra que presionemos) y convertida en mayúscula, luego hacemos una aclaración que si la nuevaletra sea una letra (regex) y que esa newletter no esté en las letrasUtiliazadas, invocamos la funcion letterinput la cual determinará si la palabra que introducimos es correcta o no

# function startGame

Primero declaramos un array dónde se mostrará las letras que ya hemos usado, una variable de errores e intentos en 0, el contenedor donde se mostrará las letras de la palabara que tenemos adivinar y las letras que hemos usado en un espacio. Cuando se declare ésta función, el botón pasará a ser no visible, y a su vez invocaremos las funciones de drawHangMan, selectWord y drawWord. Por último, tendremos un event listener que se ejecutará cunado tecleemos cualquier letra

# function addLetter

Es parecida que drawWord, sólo que en vez de ir en las letras en la clase de letras__contenedor, irá en letras__usadas. Se crea una constante letterelement que se creará un span, las letras dentro del span se convertirán en mayúsculas, y letrasUsadas invocará a letterElement en dónde las letras que hemos usadas irán dentro del div letras__usadas

# function letterInput

Esta funcion tendrá como variable letter, la cual tendremos 2 parametros: si la palabra seleccionada para adivinar, la letra está presente invocamos la function correcleter la cual nos indica que acertamos en una letra de la palabra, en caso contrario, invocamos la funcion wrongLetter. En cualquier caso, invocamos la funcion addLetter la cual añadirá en un array las letras que ya hemos usado.

# function correctLetter

Se accede al hijo de letrasContenedor, se itera la palabra del contenedor (la palabra que tenemos que adivinar), si la letra está presente en la palabra que tenemos que adiviar, se quita la clase hidden (que oculta la palabra y la muestra), y se suma en el conteo los intentos. Si la cantidad de intentos es igual a la longitud de la palabra a adivinar, quiere decir que ya hemos adivinado la palabra y por tanto hemos ganado invocando la funcion endGame.

# function addBodyPart

Se añade cuando nos equivocamos de letra. El color de las lineas lo esrablecemos en fff y el llenado de las lineas y sus coordenadas se llaman de la constante bodyparts.

# function wrongLetter

Esta funcion se invoca en la funcion letterinput cuando nos equivocamos en la letra que tenemos que adivinar. Se añade la parte del cuerpo con el indice del array bodyParts de acuerdo a la cantidad de errores que hemos tenido, y cada vez que se llama se aumenta el contador de errores. Si la cantidad de errores es igual a la longitud de la constante bodyParts, se llama a la funcion endGame con la alerta que perdimos y la palabra que era que teniamos que adivinar.

# function endGame

Esta funcion se invoca tanto como acertamos la palabra como si superamos la cantidad de intentos en correctletter y wrongLetter respectivamente. Removemos el evento el cual añadimos letras cada vez que apretamos una letra y hacemos que el boton de inicio se muestre para reiniciar el juego invocando la funcion startGame.

Link de trello adjuntado 