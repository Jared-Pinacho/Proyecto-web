const $row = document.getElementById('datatable').rows
var bancoPreguntas = []
for (let i = 0; i < $row.length; i++) {
    var temp =
    {
        pregunta: $row[i].cells[0].innerText,
        opcion: [$row[i].cells[1].innerText, $row[i].cells[2].innerText, $row[i].cells[3].innerText, $row[i].cells[4].innerText],
        respuesta: $row[i].cells[5].innerText
    }
    bancoPreguntas.push(temp)
}

var pregunta = document.getElementById('pregunta');
var leccion = document.getElementById('leccion-contenedor');
var scorecard = document.getElementById('scorecard');

var opcion0 = document.getElementById('opcion0');
var opcion1 = document.getElementById('opcion1');
var opcion2 = document.getElementById('opcion2');
var opcion3 = document.getElementById('opcion3');

var siguiente = document.querySelector('.siguiente');
var puntos = document.getElementById('puntuacion');
var span = document.querySelectorAll('span');

var i = 0;
var puntuacion = 0;

//Funcion para mostrar las preguntas
function mostrarPreguntas() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    pregunta.innerHTML = 'Q.' + (i + 1) + ' ' + bancoPreguntas[i].pregunta;
    opcion0.innerHTML = bancoPreguntas[i].opcion[0];
    opcion1.innerHTML = bancoPreguntas[i].opcion[1];
    opcion2.innerHTML = bancoPreguntas[i].opcion[2];
    opcion3.innerHTML = bancoPreguntas[i].opcion[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + bancoPreguntas.length;
}

//Funcion para calcular las puntuaciones

function calcularPuntuacion(e) {
    if (e.innerHTML === bancoPreguntas[i].respuesta && puntuacion < bancoPreguntas.length) {
        puntuacion = puntuacion + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(siguientePregunta, 300);
}

//Funcion para mostrar la siguiente pregunta
function siguientePregunta() {
    if (i < bancoPreguntas.length - 1) {
        i = i + 1;
        mostrarPreguntas();
    } else {
        puntos.innerHTML = puntuacion + '/' + bancoPreguntas.length;
        leccion.style.display = 'none';
        barraResultados.style.display = 'block';
    }
}

//Eventos de click boton siguiente
siguiente.addEventListener('click', siguientePregunta);

//Volver a la leccion evento boton
function volverALeccion() {
    location.reload();
}

//Funcion para verificar respuestas
function verificarRespuestas() {
    var bancoDeRespuestas = document.getElementById('bancoDeRespuestas');
    var respuestas = document.getElementById('respuestas');
    bancoDeRespuestas.style.display = 'block';
    barraResultados.style.display = 'none';
    for (a = 0; a < bancoPreguntas.length; a++) {
        var lista = document.createElement('li');
        lista.innerHTML = bancoPreguntas[a].respuesta;
        respuestas.appendChild(lista);
    }
}

mostrarPreguntas();

const $form = document.getElementById('formulario')
const $inputAciertos = document.getElementById('aciertos')

$form.addEventListener('click', (event) => {
    $inputAciertos.setAttribute('value', puntuacion)
    console.log(puntuacion);
})