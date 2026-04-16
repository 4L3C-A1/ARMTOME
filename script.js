// script.js - Lógica Corregida

// 1. FUNCIÓN PURA: Solo calcula, no toca el HTML [cite: 116]
function comprobarRespuesta(opcionSeleccionada, opcionCorrecta) {
    return opcionSeleccionada === opcionCorrecta;
}

// 2. FUNCIÓN MAIN: Gestiona la interacción [cite: 117]
function inicio() {
    const preguntaActual = bancoDePreguntas[0]; // Usamos la primera del JSON
    const enunciado = document.getElementById("enunciado-pregunta");
    const botones = document.querySelectorAll(".btn-opcion");
    const divResultado = document.getElementById("resultado");

    // Pintamos la pregunta y opciones del JSON en el HTML
    enunciado.textContent = preguntaActual.pregunta;
    botones.forEach((boton, i) => {
        boton.textContent = preguntaActual.opciones[i];
        
        // Evento al pulsar [cite: 118]
        boton.onclick = () => {
            // Llamada a la función pura [cite: 119]
            const esCorrecto = comprobarRespuesta(i, preguntaActual.correcta);
            
            // Feedback visual y cambio de clases [cite: 120, 121]
            divResultado.classList.remove("correcto", "error");
            
            if (esCorrecto) {
                divResultado.textContent = "¡Correcto! 🥳";
                divResultado.className = "correcto";
            } else {
                divResultado.textContent = "Has fallado, sigue estudiando 📚";
                divResultado.className = "error";
            }
        };
    });
}

// Arrancar la app cuando el HTML esté listo
window.onload = inicio;
