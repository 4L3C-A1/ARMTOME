// script.js - Lógica Corregida para que se VEAN las preguntas

// 1. FUNCIÓN PURA (Requisito del examen)
function comprobarRespuesta(opcionSeleccionada, opcionCorrecta) {
    return opcionSeleccionada === opcionCorrecta;
}

// 2. FUNCIÓN PARA CARGAR LA PREGUNTA EN LA PANTALLA
function cargarPregunta() {
    // Cogemos la primera pregunta del archivo pregunta.js
    const preguntaActual = bancoDePreguntas[0]; 
    
    // Seleccionamos los elementos del HTML
    const enunciado = document.getElementById("enunciado-pregunta");
    const botones = document.querySelectorAll(".btn-opcion");

    // Ponemos el texto de la pregunta
    enunciado.textContent = preguntaActual.pregunta;

    // Ponemos el texto en cada botón
    botones.forEach((boton, indice) => {
        boton.textContent = preguntaActual.opciones[indice];
        
        // Añadimos el evento de clic a cada botón
        boton.onclick = () => {
            manejarRespuesta(indice, preguntaActual.correcta);
        };
    });
}

// 3. FUNCIÓN MAIN (Gestiona el feedback visual)
function manejarRespuesta(opcionPulsada, correcta) {
    const esCorrecta = comprobarRespuesta(opcionPulsada, correcta);
    const resultadoDiv = document.getElementById("resultado");

    // Limpiamos clases anteriores
    resultadoDiv.classList.remove("correcto", "error");

    if (esCorrecta) {
        resultadoDiv.textContent = "¡Correcto! 🥳";
        resultadoDiv.className = "correcto";
    } else {
        resultadoDiv.textContent = "Has fallado, sigue estudiando 📚";
        resultadoDiv.className = "error";
    }
}

// 4. INICIO: Ejecutar cargarPregunta cuando la web esté lista
document.addEventListener("DOMContentLoaded", cargarPregunta);
