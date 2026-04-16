// script.js - Lógica de la Autoescuela (Rol 3)

// Función pura (obligatoria según el enunciado)
function comprobarRespuesta(opcion) {
    return opcion === 2; // La opción correcta es la número 2
}

// Función principal que maneja la respuesta
function manejarRespuesta(opcion) {
    const esCorrecta = comprobarRespuesta(opcion);
    const resultadoDiv = document.getElementById("resultado");

    // Limpiamos clases anteriores
    resultadoDiv.classList.remove("correcto", "error");

    if (esCorrecta) {
        resultadoDiv.textContent = "¡Correcto! 🥳";
        resultadoDiv.classList.add("correcto");
    } else {
        resultadoDiv.textContent = "Has fallado... 📚";
        resultadoDiv.classList.add("error");
    }
}

// Conectamos los botones cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("opcion1");
    const btn2 = document.getElementById("opcion2");
    const btn3 = document.getElementById("opcion3");

    btn1.addEventListener("click", () => manejarRespuesta(1));
    btn2.addEventListener("click", () => manejarRespuesta(2));
    btn3.addEventListener("click", () => manejarRespuesta(3));
});