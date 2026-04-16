// script.js - Lógica con Avance Automático
let indiceActual = 0;

// 1. FUNCIÓN PURA
function comprobarRespuesta(opcionSeleccionada, opcionCorrecta) {
    return opcionSeleccionada === opcionCorrecta;
}

// 2. FUNCIÓN PARA CARGAR LA PREGUNTA
function cargarPregunta() {
    const preguntaActual = bancoDePreguntas[indiceActual];
    const enunciado = document.getElementById("enunciado-pregunta");
    const botones = document.querySelectorAll(".btn-opcion");
    const resultadoDiv = document.getElementById("resultado");

    // Limpiamos pantalla
    resultadoDiv.textContent = "";
    resultadoDiv.className = "";
    
    // Escribimos la pregunta
    enunciado.textContent = (indiceActual + 1) + ". " + preguntaActual.pregunta;

    // Configuramos botones
    botones.forEach((boton, indice) => {
        boton.textContent = preguntaActual.opciones[indice];
        boton.disabled = false;
        boton.onclick = () => manejarRespuesta(indice, preguntaActual.correcta);
    });
}

// 3. FUNCIÓN MAIN CON AVANCE AUTOMÁTICO
function manejarRespuesta(opcionPulsada, correcta) {
    const esCorrecta = comprobarRespuesta(opcionPulsada, correcta);
    const resultadoDiv = document.getElementById("resultado");
    const botones = document.querySelectorAll(".btn-opcion");
    const enunciado = document.getElementById("enunciado-pregunta");

    // Bloqueamos clics repetidos
    botones.forEach(boton => boton.disabled = true);

    if (esCorrecta) {
        resultadoDiv.textContent = "¡Correcto! 🥳";
        resultadoDiv.className = "correcto";
    } else {
        resultadoDiv.textContent = "Has fallado, sigue estudiando 📚";
        resultadoDiv.className = "error";
    }

    // Espera 2 segundos y pasa a la siguiente automáticamente
    setTimeout(() => {
        indiceActual++;
        if (indiceActual < bancoDePreguntas.length) {
            cargarPregunta();
        } else {
            // Fin del test
            enunciado.textContent = "¡Test Finalizado!";
            document.getElementById("contenedor-opciones").style.display = "none";
            resultadoDiv.textContent = "Has completado todas las preguntas 🎉";
            resultadoDiv.className = "correcto";
        }
    }, 2000);
}

// Iniciar al cargar la página
document.addEventListener("DOMContentLoaded", cargarPregunta);
