// preguntas.js - Banco de datos de preguntas (Rol 4)

const bancoDePreguntas = [
  // --- CATEGORÍA: VELOCIDAD ---
  {
    id: 1,
    categoria: "velocidad",
    pregunta: "¿Cuál es la velocidad máxima para un turismo en una autovía?",
    opciones: ["100 km/h", "120 km/h", "90 km/h"],
    correcta: 1,
    explicacion: "En autovías y autopistas, el límite genérico para turismos es 120 km/h."
  },
  {
    id: 2,
    categoria: "velocidad",
    pregunta: "¿A qué velocidad máxima puede circular un turismo por una carretera convencional?",
    opciones: ["90 km/h", "100 km/h", "120 km/h"],
    correcta: 0,
    explicacion: "En carreteras convencionales, la velocidad máxima para turismos y motocicletas es de 90 km/h."
  },

  // --- CATEGORÍA: SEÑALIZACIÓN ---
  {
    id: 3,
    categoria: "señalizacion",
    pregunta: "¿Qué indica una luz amarilla intermitente en un semáforo?",
    opciones: ["Detenerse obligatoriamente", "Extremar precaución y ceder el paso", "Paso libre"],
    correcta: 1,
    explicacion: "Indica precaución y obligación de ceder el paso a los vehículos que crucen."
  },
  {
    id: 4,
    categoria: "señalizacion",
    pregunta: "Una línea blanca continua en la calzada significa...",
    opciones: ["No atravesarla ni circular sobre ella", "Carril reversible", "Adelantamiento permitido si no viene nadie"],
    correcta: 0,
    explicacion: "Como norma general, ningún conductor debe atravesar una línea longitudinal continua."
  },
  {
    id: 5,
    categoria: "señalizacion",
    pregunta: "Ante una señal de STOP, ¿dónde debe detenerse?",
    opciones: ["Donde tenga visibilidad, sin importar la línea", "Inmediatamente antes de la línea de detención", "Después de la línea de detención"],
    correcta: 1,
    explicacion: "Debe detenerse siempre justo antes de la línea de detención. Si no hay visibilidad, hará una segunda detención donde la haya."
  },

  // --- CATEGORÍA: ALCOHOLEMIA ---
  {
    id: 6,
    categoria: "alcoholemia",
    pregunta: "¿Cuál es la tasa máxima de alcohol permitida en aire espirado para un conductor novel?",
    opciones: ["0,25 miligramos por litro", "0,15 miligramos por litro", "0,30 miligramos por litro"],
    correcta: 1,
    explicacion: "Durante los dos primeros años, la tasa máxima es de 0,15 mg/l en aire espirado."
  },
  {
    id: 7,
    categoria: "alcoholemia",
    pregunta: "¿Cuál es la tasa general máxima de alcohol en sangre permitida?",
    opciones: ["0,50 gramos por litro", "0,30 gramos por litro", "0,80 gramos por litro"],
    correcta: 0,
    explicacion: "La tasa general es de 0,50 g/l en sangre (que equivale a 0,25 mg/l en aire espirado)."
  },

  // --- CATEGORÍA: SEGURIDAD VIAL ---
  {
    id: 8,
    categoria: "seguridad",
    pregunta: "Si realiza una frenada de emergencia con un sistema ABS, ¿qué debe hacer?",
    opciones: ["Bombear el freno suavemente", "Pisar a fondo el freno y el embrague hasta detenerse", "Frenar solo con el freno de mano"],
    correcta: 1,
    explicacion: "Con ABS se debe pisar con fuerza el pedal del freno y el embrague sin soltar para que el sistema actúe."
  },
  {
    id: 9,
    categoria: "seguridad",
    pregunta: "¿Es obligatorio llevar puesto el cinturón de seguridad en las plazas traseras?",
    opciones: ["Solo en vías interurbanas", "No, es opcional", "Sí, en todo tipo de vías"],
    correcta: 2,
    explicacion: "El uso del cinturón es obligatorio para todos los ocupantes y en todo tipo de vías."
  },
  {
    id: 10,
    categoria: "seguridad",
    pregunta: "Para adelantar a un ciclista en vía interurbana, ¿qué separación lateral mínima debe dejar?",
    opciones: ["1 metro", "1,5 metros", "2 metros"],
    correcta: 1,
    explicacion: "Se debe dejar una separación lateral mínima de 1,5 metros y, si es posible, ocupar parte o la totalidad del carril contiguo."
  },
  {
    id: 11,
    categoria: "seguridad",
    pregunta: "La fatiga al volante hace que el tiempo de reacción del conductor...",
    opciones: ["Disminuya", "Aumente", "No varíe"],
    correcta: 1,
    explicacion: "La fatiga aumenta el tiempo que tardamos en reaccionar ante un imprevisto, haciéndolo más peligroso."
  },
  {
    id: 12,
    categoria: "seguridad",
    pregunta: "Se recomienda descansar en viajes largos...",
    opciones: ["Cada 4 horas o 400 km", "Cada 2 horas o 200 km", "Solo cuando se tenga sueño"],
    correcta: 1,
    explicacion: "Es fundamental parar a descansar cada 2 horas o 200 kilómetros para evitar la fatiga."
  },

  // --- CATEGORÍA: MECÁNICA Y MANTENIMIENTO ---
  {
    id: 13,
    categoria: "mecanica",
    pregunta: "¿Cuál es la profundidad mínima permitida para el dibujo de los neumáticos de un turismo?",
    opciones: ["1,0 milímetros", "1,6 milímetros", "2,0 milímetros"],
    correcta: 1,
    explicacion: "Legalmente, la profundidad de las ranuras principales de la banda de rodadura no puede ser inferior a 1,6 mm."
  },
  {
    id: 14,
    categoria: "mecanica",
    pregunta: "Si se enciende el testigo de color rojo de presión de aceite en el salpicadero, debe...",
    opciones: ["Detener el vehículo inmediatamente en lugar seguro", "Continuar hasta el próximo taller", "Acelerar para aumentar la presión"],
    correcta: 0,
    explicacion: "Indica falta de lubricación en el motor, lo que puede causar una avería grave si no se detiene el motor."
  },

  // --- CATEGORÍA: LUCES ---
  {
    id: 15,
    categoria: "luces",
    pregunta: "¿Cuándo es obligatorio encender la luz antiniebla trasera?",
    opciones: ["Siempre que llueva", "Solo de noche", "Con niebla espesa o lluvia muy intensa"],
    correcta: 2,
    explicacion: "Solo se debe encender en condiciones meteorológicas especialmente desfavorables que reduzcan mucho la visibilidad."
  },
  {
    id: 16,
    categoria: "luces",
    pregunta: "En un túnel suficientemente iluminado, ¿qué luces debe llevar encendidas?",
    opciones: ["Las de posición y cruce", "Solo las de posición", "Las de carretera (largas)"],
    correcta: 0,
    explicacion: "En todo túnel es obligatorio encender al menos las luces de posición y las de cruce (cortas)."
  },

  // --- CATEGORÍA: DOCUMENTACIÓN Y SEGURO ---
  {
    id: 17,
    categoria: "documentacion",
    pregunta: "¿Está permitido circular con la ITV caducada?",
    opciones: ["Solo para ir al taller", "No, está prohibido en todo caso", "Sí, durante 15 días"],
    correcta: 1,
    explicacion: "No se puede circular con la ITV caducada; de ser así, se comete una infracción grave."
  },
  {
    id: 18,
    categoria: "documentacion",
    pregunta: "¿Cuándo debe pasar la primera inspección técnica (ITV) un turismo nuevo?",
    opciones: ["A los 2 años", "A los 4 años", "A los 5 años"],
    correcta: 1,
    explicacion: "Los turismos de uso privado están exentos de pasar la ITV hasta el cuarto año desde su primera matriculación."
  },
  {
    id: 19,
    categoria: "documentacion",
    pregunta: "¿Es obligatorio llevar el recibo del seguro en el coche?",
    opciones: ["Sí, siempre", "No, ya no es obligatorio llevarlo físicamente", "Solo si se viaja al extranjero"],
    correcta: 1,
    explicacion: "Actualmente los agentes pueden comprobar si el vehículo está asegurado de forma telemática, por lo que no es obligatorio llevar el recibo en papel."
  },
  {
    id: 20,
    categoria: "documentacion",
    pregunta: "¿Qué documento acredita que el vehículo reúne las condiciones técnicas para circular?",
    opciones: ["El permiso de circulación", "La tarjeta de inspección técnica (ITV)", "El recibo del seguro"],
    correcta: 1,
    explicacion: "La tarjeta de ITV es el documento que acredita las características técnicas del vehículo y que está en condiciones de circular."
  }
];
