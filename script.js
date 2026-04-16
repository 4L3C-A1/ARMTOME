// script.js - Lógica Completa con avance automático

// 1. VARIABLE GLOBAL: Controla en qué pregunta estamos
let indiceActual = 0; 

// 2. FUNCIÓN PURA (Requisito del examen)
function comprobarRespuesta(opcionSeleccionada, opcionCorrecta) {
    return opcionSeleccionada === opcionCorrecta;
}

// 3. FUNCIÓN PARA CARGAR LA PREGUNTA
function cargarPregunta() {
    const preguntaActual = bancoDePreguntas[indiceActual]; 
    const enunciado = document.getElementById("enunciado-pregunta");
    const botones = document.querySelectorAll(".btn-opcion");
    const resultadoDiv = document.getElementById("resultado");

    // Limpiamos el mensaje de resultado al cargar nueva pregunta
    resultadoDiv.textContent = "";
    resultadoDiv.className = "";

    // Pintamos los textos
    enunciado.textContent = (indiceActual + 1) + ". " + preguntaActual.pregunta;

    botones.forEach((boton, indice) => {
        boton.textContent = preguntaActual.opciones[indice];
        boton.disabled = false; // Reactivamos los botones por si estaban bloqueados
        
        boton.onclick = () => {
            manejarRespuesta(indice, preguntaActual.correcta);
        };
    });
}

// 4. FUNCIÓN MAIN (Gestiona el feedback y el avance)
function manejarRespuesta(opcionPulsada, correcta) {
    const esCorrecta = comprobarRespuesta(opcionPulsada, correcta);
    const resultadoDiv = document.getElementById("resultado");
    const botones = document.querySelectorAll(".btn-opcion");

    // Bloqueamos los botones para que el usuario no pueda pulsar dos veces
    botones.forEach(boton => boton.disabled = true);

    if (esCorrecta) {
        resultadoDiv.textContent = "¡Correcto! 🥳";
        resultadoDiv.className = "correcto";
    } else {
        resultadoDiv.textContent = "Has fallado, sigue estudiando 📚";
        resultadoDiv.className = "error";
    }

    // MAGIA: Esperamos 2.5 segundos y pasamos a la siguiente
    setTimeout(() => {
        indiceActual++; // Sumamos 1 al índice
        
        // Comprobamos si quedan preguntas
        if (indiceActual < bancoDePreguntas.length) {
            cargarPregunta(); // Cargamos la siguiente
        } else {
            // Si ya no hay más preguntas
            enunciado.textContent = "¡Test Finalizado!";
            document.getElementById("contenedor-opciones").style.display = "none";
            resultadoDiv.textContent = "Has completado todas las preguntas 🎉";
            resultadoDiv.className = "correcto";
        }
    }, 2500); // 2500 milisegundos = 2.5 segundos
}

// 5. INICIO: Arrancamos la primera vez
document.addEventListener("DOMContentLoaded", cargarPregunta);
