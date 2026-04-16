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

  // --- CATEGORÍA: SEÑALIZACIÓN ---
  {
    id: 2,
    categoria: "señalizacion",
    pregunta: "¿Qué indica una luz amarilla intermitente en un semáforo?",
    opciones: ["Detenerse", "Extremar precaución y ceder el paso", "Paso libre"],
    correcta: 1,
    explicacion: "Indica precaución y obligación de ceder el paso a los vehículos que crucen."
  },
  {
    id: 3,
    categoria: "señalizacion",
    pregunta: "Una línea blanca continua en la calzada significa...",
    opciones: ["No atravesarla", "Carril reversible", "Adelantamiento permitido"],
    correcta: 0,
    explicacion: "Como norma general, ningún conductor debe atravesar una línea longitudinal continua."
  },
  {
    id: 4,
    categoria: "señalizacion",
    pregunta: "Señal triangular con una exclamación en el centro:",
    opciones: ["Peligro por obras", "Peligro desconocido o distintos a los señalizados", "Prohibido pasar"],
    correcta: 1,
    explicacion: "Advierte de la proximidad de un peligro distinto de los advertidos por otras señales."
  },
  {
    id: 5,
    categoria: "señalizacion",
    pregunta: "Señal redonda con borde rojo y fondo blanco (vacía):",
    opciones: ["Entrada prohibida", "Circulación prohibida a toda clase de vehículos", "Parking reservado"],
    correcta: 1,
    explicacion: "Prohíbe la circulación de toda clase de vehículos en ambos sentidos."
  },

  // --- CATEGORÍA: NORMAS Y PRIORIDAD ---
  {
    id: 6,
    categoria: "prioridad",
    pregunta: "En una intersección sin señalizar, ¿quién tiene la prioridad?",
    opciones: ["El vehículo más rápido", "El que sale por la derecha", "El que circula por la vía principal"],
    correcta: 1,
    explicacion: "En ausencia de señal, se debe ceder el paso a los vehículos que se aproximen por la derecha."
  },
  {
    id: 7,
    categoria: "prioridad",
    pregunta: "¿Se puede adelantar en un paso a nivel?",
    opciones: ["Sí, siempre", "No, nunca", "Solo a vehículos de 2 ruedas que no impidan la visión"],
    correcta: 2,
    explicacion: "Está prohibido, excepto a vehículos de dos ruedas que no impidan la visibilidad lateral."
  },
  {
    id: 8,
    categoria: "prioridad",
    pregunta: "¿Está permitido circular por el arcén en caso de avería si se obstaculiza la marcha?",
    opciones: ["Sí", "No, hay que esperar a la grúa parado", "Solo si es de noche"],
    correcta: 0,
    explicacion: "Si por avería se circula a velocidad anormalmente reducida, se debe ir por el arcén."
  },

  // --- CATEGORÍA: SEGURIDAD Y FACTOR HUMANO ---
  {
    id: 9,
    categoria: "seguridad",
    pregunta: "La tasa máxima de alcohol para un conductor novel es...",
    opciones: ["0,15 mg/l en aire espirado", "0,25 mg/l en aire espirado", "0,30 mg/l en aire espirado"],
    correcta: 0,
    explicacion: "Los noveles no pueden superar los 0,15 mg/l durante los dos primeros años de carné."
  },
  {
    id: 10,
    categoria: "seguridad",
    pregunta: "La fatiga al volante produce...",
    opciones: ["Una disminución del tiempo de reacción", "Un aumento del tiempo de reacción", "Una mejor percepción del entorno"],
    correcta: 1,
    explicacion: "Estar cansado hace que tardemos más tiempo en reaccionar ante un imprevisto."
  },
  {
    id: 11,
    categoria: "seguridad",
    pregunta: "¿Es obligatorio el uso del cinturón en las plazas traseras?",
    opciones: ["No, es opcional", "Sí, en todas las vías", "Solo en vías interurbanas (carreteras)"],
    correcta: 1,
    explicacion: "El uso del cinturón es obligatorio para todos los ocupantes en cualquier vía."
  },
  {
    id: 12,
    categoria: "seguridad",
    pregunta: "¿Qué distancia de seguridad hay que dejar con el vehículo de delante?",
    opciones: ["Exactamente 50 metros", "La que permita detenerse sin colisionar en caso de frenado brusco", "Dos metros por cada 10 km/h"],
    correcta: 1,
    explicacion: "Todo conductor debe dejar una distancia que le permita detenerse con seguridad."
  },
  {
    id: 13,
    categoria: "seguridad",
    pregunta: "Al adelantar a ciclistas fuera de poblado, la distancia lateral mínima es:",
    opciones: ["0,5 metros", "1,5 metros", "La anchura del propio vehículo"],
    correcta: 1,
    explicacion: "Es obligatorio dejar un margen de al menos 1,5 metros por seguridad."
  },

  // --- CATEGORÍA: USO DEL VEHÍCULO ---
  {
    id: 14,
    categoria: "uso_vehiculo",
    pregunta: "¿Se permite el uso del dispositivo 'manos libres'?",
    opciones: ["Sí, siempre que no se usen cascos o auriculares", "No, está totalmente prohibido", "Solo para llamadas de emergencia"],
    correcta: 0,
    explicacion: "Se permite siempre que no requiera el uso de las manos ni auriculares."
  },
  {
    id: 15,
    categoria: "uso_vehiculo",
    pregunta: "¿Qué luces son obligatorias al circular con niebla densa?",
    opciones: ["Solo posición", "Corto alcance y antiniebla trasera", "Luces largas o de carretera"],
    correcta: 1,
    explicacion: "La luz antiniebla trasera es obligatoria en condiciones de niebla muy densa."
  },

  // --- CATEGORÍA: MECÁNICA Y MANTENIMIENTO ---
  {
    id: 16,
    categoria: "mecanica",
    pregunta: "¿Cuándo se debe comprobar la presión de los neumáticos?",
    opciones: ["Cada 6 meses", "Con el neumático en frío", "Tras un viaje largo (neumático caliente)"],
    correcta: 1,
    explicacion: "Para una medición real, los neumáticos deben estar fríos."
  },
  {
    id: 17,
    categoria: "mecanica",
    pregunta: "En una frenada de emergencia con un sistema ABS, ¿qué debe hacer?",
    opciones: ["Bombear el freno suavemente", "Pisar a fondo el freno y el embrague hasta detenerse", "Frenar solo con el freno de mano"],
    correcta: 1,
    explicacion: "Con ABS se debe pisar con fuerza el pedal sin soltar para que el sistema actúe."
  },

  // --- CATEGORÍA: DOCUMENTACIÓN Y SEGURO ---
  {
    id: 18,
    categoria: "documentacion",
    pregunta: "¿Está permitido circular con la ITV caducada?",
    opciones: ["Solo para ir al taller", "No, está prohibido bajo cualquier circunstancia", "Sí, si el vehículo tiene menos de 10 años"],
    correcta: 1,
    explicacion: "No se puede circular con la ITV caducada; solo se permite el trayecto hacia la estación ITV."
  },
  {
    id: 19,
    categoria: "documentacion",
    pregunta: "¿Cuándo debe pasar la primera inspección técnica (ITV) un turismo nuevo?",
    opciones: ["A los 2 años", "A los 4 años", "A los 5 años"],
    correcta: 1,
    explicacion: "Los turismos de uso privado están exentos hasta el cuarto año desde su matriculación."
  },
  {
    id: 20,
    categoria: "documentacion",
    pregunta: "El seguro de suscripción obligatoria (Seguro a terceros), ¿qué cubre?",
    opciones: ["Los daños propios del vehículo culpable", "Los daños a terceros (personas y bienes)", "El robo y rotura de lunas"],
    correcta: 1,
    explicacion: "Cubre la responsabilidad civil del conductor frente a daños causados a otros."
  }
];
