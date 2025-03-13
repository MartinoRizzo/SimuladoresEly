const preguntas = [
    {
      pregunta: "¿Qué rol preferís en un equipo?",
      respuestas: [
        { texto: "Liderar y planear estrategias", personaje: "Santos" },
        { texto: "Convencer y manipular", personaje: "Ravena" },
        { texto: "Resolver los problemas técnicos", personaje: "Medina" },
        { texto: "Hacer el trabajo físico y silencioso", personaje: "Lamponne" }
      ]
    },
    {
      pregunta: "¿Qué te representa más?",
      respuestas: [
        { texto: "Frialdad y cálculo", personaje: "Santos" },
        { texto: "Empatía y persuasión", personaje: "Ravena" },
        { texto: "Practicidad y precisión", personaje: "Medina" },
        { texto: "Discreción y eficiencia", personaje: "Lamponne" }
      ]
    },
    {
      pregunta: "¿Qué herramienta no puede faltarte?",
      respuestas: [
        { texto: "Un buen plan", personaje: "Santos" },
        { texto: "Tu labia", personaje: "Ravena" },
        { texto: "Gadgets y tecnología", personaje: "Medina" },
        { texto: "Un disfraz impecable", personaje: "Lamponne" }
      ]
    },
    {
      pregunta: "¿Qué harías en tu tiempo libre?",
      respuestas: [
        { texto: "Leer libros de filosofía", personaje: "Santos" },
        { texto: "Ir al teatro o practicar actuación", personaje: "Ravena" },
        { texto: "Jugar al ajedrez o reparar cosas", personaje: "Medina" },
        { texto: "Cuidar animales exóticos", personaje: "Lamponne" }
      ]
    }
  ];
  
  const scores = {
    Santos: 0,
    Ravena: 0,
    Medina: 0,
    Lamponne: 0
  };
  
  let preguntaActual = 0;
  
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const restartBtn = document.getElementById('restart-btn');
  const backgroundMusic = document.getElementById('background-music');
  
  function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    questionContainer.innerHTML = `
      <div class="question">${pregunta.pregunta}</div>
      <div class="answers">
        ${pregunta.respuestas.map((r, i) => `<button onclick="seleccionarRespuesta(${i})">${r.texto}</button>`).join('')}
      </div>
    `;
  }
  
  function seleccionarRespuesta(index) {
    const personaje = preguntas[preguntaActual].respuestas[index].personaje;
    scores[personaje]++;
  
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    let personajeGanador = "";
    let maxPuntos = 0;
  
    for (let personaje in scores) {
      if (scores[personaje] > maxPuntos) {
        maxPuntos = scores[personaje];
        personajeGanador = personaje;
      }
    }
  
    let descripcion = "";
    let imagen = "";
  
    switch (personajeGanador) {
      case "Santos":
        descripcion = "Sos La arquitecta mas sorprendente que he conocido!";
        imagen = "assets/Ely.jpg";
        break;
      case "Ravena":
        descripcion = "Sos La arquitecta mas sorprendente que he conocido!";
        imagen = "assets/Ely.jpg";
        break;
      case "Medina":
        descripcion = "Sos La arquitecta mas sorprendente que he conocido!";
        imagen = "assets/Ely.jpg";
        break;
      case "Lamponne":
        descripcion = "Sos La arquitecta mas sorprendente que he conocido!";
        imagen = "assets/Ely.jpg";
        break;
    }
  
    questionContainer.innerHTML = "";
    resultContainer.innerHTML = `
      <strong>"Tu simulador es: ¡Sos vos!"</strong><br>
      ${descripcion}<br>
      <img src="${imagen}" alt="${personajeGanador}">
    `;
  
    restartBtn.style.display = "block";
  }
  
  restartBtn.addEventListener('click', reiniciarJuego);
  
  function reiniciarJuego() {
    preguntaActual = 0;
    for (let personaje in scores) {
      scores[personaje] = 0;
    }
  
    resultContainer.innerHTML = "";
    restartBtn.style.display = "none";
    mostrarPregunta();
  }
  
  // Inicia el juego
  mostrarPregunta();
  
  // Inicia la música de fondo al cargar la página
  window.addEventListener('load', () => {
    backgroundMusic.play().catch(() => {
      console.log("El usuario necesita interactuar para iniciar el audio.");
    });
  });
  
