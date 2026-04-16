// script.js - Lógica JavaScript (Rol 3 - Desarrollador de Lógica)

// ====================== FUNCIÓN PURA (Paso 2) ======================
function comprobarRespuesta(opcion) {
    // La respuesta correcta es la B → opción número 2
    return opcion === 2;
}

// ====================== FUNCIÓN MAIN (Paso 3) ======================
function manejarRespuesta(opcion) {
    const esCorrecta = comprobarRespuesta(opcion);
    const resultadoDiv = document.getElementById("resultado");

    // Limpiamos clases anteriores para que no se acumulen
    resultadoDiv.classList.remove("correcto", "error");

    if (esCorrecta) {
        resultadoDiv.textContent = "¡Correcto! 🥳";
        resultadoDiv.classList.add("correcto");
    } else {
        resultadoDiv.textContent = "Has fallado... 📚";
        resultadoDiv.classList.add("error");
    }
}

// ====================== CONEXIÓN DE BOTONES (Paso 4) ======================
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-opcion");

    botones.forEach((boton, indice) => {
        // indice 0 = A (opción 1), indice 1 = B (opción 2), indice 2 = C (opción 3)
        const numeroOpcion = indice + 1;

        boton.addEventListener("click", () => {
            manejarRespuesta(numeroOpcion);
        });
    });
});