/* ============================================================
   EL INGLÉS PARA TODOS — Ejercicios interactivos
   HTML + CSS + JavaScript vanilla (sin librerías)
   Cada tema abre UN ejercicio de inglés con opciones.
   ============================================================ */

/* ---------- DATOS: un ejercicio por tema ---------- */
const datos = {
  ninos: {
    titulo: 'Niños (6 – 11 años)',
    edad: 'Aprendizaje lúdico y visual',
    icono: '🧒',
    ejercicios: [
      {
        tema: 'Saludos y presentaciones',
        pregunta: 'Hello! My ______ is Ana.',
        opciones: ['name', 'blue', 'seven', 'cat'],
        correcta: 0,
        explicacion: '"My name is..." significa "Mi nombre es...". Se usa para presentarte.'
      },
      {
        tema: 'Colores',
        pregunta: 'The sun is ______.',
        opciones: ['yellow', 'purple', 'black', 'green'],
        correcta: 0,
        explicacion: '"Yellow" es amarillo. "The sun is yellow" = "El sol es amarillo".'
      },
      {
        tema: 'Números',
        pregunta: 'One, two, ______, four.',
        opciones: ['five', 'three', 'ten', 'two'],
        correcta: 1,
        explicacion: 'Después de "two" (2) sigue "three" (3): one, two, three, four.'
      },
      {
        tema: 'Animales',
        pregunta: 'A ______ says "meow".',
        opciones: ['dog', 'cow', 'cat', 'duck'],
        correcta: 2,
        explicacion: 'El gato ("cat") dice "meow". El perro ("dog") dice "woof".'
      },
      {
        tema: 'La familia',
        pregunta: "My mother's mother is my ______.",
        opciones: ['sister', 'grandmother', 'aunt', 'baby'],
        correcta: 1,
        explicacion: 'La madre de tu mamá es tu "grandmother" (abuela).'
      },
      {
        tema: 'Partes del cuerpo',
        pregunta: 'I see with my ______.',
        opciones: ['ears', 'eyes', 'hands', 'feet'],
        correcta: 1,
        explicacion: '"Eyes" son los ojos. "I see with my eyes" = "Veo con mis ojos".'
      }
    ]
  },
  adolescentes: {
    titulo: 'Adolescentes (12 – 17 años)',
    edad: 'Comunicación cotidiana y escolar',
    icono: '🎧',
    ejercicios: [
      {
        tema: 'Rutinas diarias',
        pregunta: 'I ______ wake up at 6 a.m. every day.',
        opciones: ['usually', 'yesterday', 'last week', 'two years ago'],
        correcta: 0,
        explicacion: '"Usually" expresa rutina: algo que haces casi todos los días.'
      },
      {
        tema: 'Gustos y preferencias',
        pregunta: 'She ______ pop music.',
        opciones: ['love', 'loves', 'loving', 'is love'],
        correcta: 1,
        explicacion: 'Con "she" el verbo lleva -s en presente: "she loves".'
      },
      {
        tema: 'Música y deportes',
        pregunta: 'They ______ football on Saturdays.',
        opciones: ['plays', 'play', 'playing', 'played'],
        correcta: 1,
        explicacion: 'Con "they" el verbo va sin -s: "they play football".'
      },
      {
        tema: 'Vocabulario escolar',
        pregunta: 'You can borrow books at the ______.',
        opciones: ['library', 'cafeteria', 'gym', 'bus stop'],
        correcta: 0,
        explicacion: '"Library" es la biblioteca, donde puedes prestar libros ("borrow books").'
      },
      {
        tema: 'Diálogos cotidianos',
        pregunta: 'A: How are you? — B: ______',
        opciones: ["I'm fine, thanks!", 'My name is Luis.', 'I am fifteen.', 'See you tomorrow.'],
        correcta: 0,
        explicacion: 'Para responder "How are you?" decimos "I\'m fine, thanks!".'
      },
      {
        tema: 'Expresiones frecuentes',
        pregunta: 'A: Thank you very much! — B: ______',
        opciones: ["You're welcome!", 'Good night!', 'I am fine.', 'Nice to meet you.'],
        correcta: 0,
        explicacion: '"You\'re welcome" es la respuesta típica a "thank you".'
      }
    ]
  },
  jovenes: {
    titulo: 'Jóvenes (18 – 25 años)',
    edad: 'Inglés académico, social y profesional inicial',
    icono: '🎓',
    ejercicios: [
      {
        tema: 'Inglés para viajes',
        pregunta: "I'd like to ______ a table for two, please.",
        opciones: ['book', 'cook', 'read', 'drive'],
        correcta: 0,
        explicacion: '"Book a table" significa reservar una mesa.'
      },
      {
        tema: 'Estudios y universidad',
        pregunta: 'She is very good ______ speaking in public.',
        opciones: ['in', 'at', 'on', 'of'],
        correcta: 1,
        explicacion: 'La expresión correcta es "good at" + verbo en -ing.'
      },
      {
        tema: 'Tecnología y comunicación',
        pregunta: 'Could you ______ me the file by email, please?',
        opciones: ['send', 'sing', 'sell', 'sit'],
        correcta: 0,
        explicacion: '"Send" significa enviar: "send the file" = enviar el archivo.'
      },
      {
        tema: 'Conversaciones naturales',
        pregunta: 'A: Thanks for your help! — B: ______',
        opciones: ['No problem at all!', 'I am sorry.', 'Yes, I can.', 'You are fourteen.'],
        correcta: 0,
        explicacion: '"No problem at all!" es una respuesta natural y amable a un agradecimiento.'
      },
      {
        tema: 'Preparación para entrevistas',
        pregunta: 'Tell me about ______.',
        opciones: ['you', 'yourself', 'your', 'yours'],
        correcta: 1,
        explicacion: '"Tell me about yourself" = "Háblame de ti", típico en entrevistas.'
      },
      {
        tema: 'Vida social',
        pregunta: "I've been living here ______ 2020.",
        opciones: ['since', 'for', 'during', 'from'],
        correcta: 0,
        explicacion: '"Since" se usa con un momento exacto (2020); "for" con períodos (for 4 years).'
      }
    ]
  },
  adultos: {
    titulo: 'Adultos (26 – 59 años)',
    edad: 'Inglés funcional para la vida diaria y el trabajo',
    icono: '💼',
    ejercicios: [
      {
        tema: 'Atención al público',
        pregunta: 'Good morning! How can I ______ you?',
        opciones: ['help', 'make', 'do', 'give'],
        correcta: 0,
        explicacion: '"How can I help you?" es la frase estándar para atender a alguien.'
      },
      {
        tema: 'En el aeropuerto',
        pregunta: 'Your flight ______ at 9:45.',
        opciones: ['departs', 'depart', 'departing', 'is depart'],
        correcta: 0,
        explicacion: '"Departs" es la forma correcta con "your flight"; significa "sale/despega".'
      },
      {
        tema: 'En el hotel',
        pregunta: 'I have a ______ for two nights.',
        opciones: ['reservation', 'recipe', 'receipt', 'reason'],
        correcta: 0,
        explicacion: '"Reservation" es una reservación; "receipt" es un recibo.'
      },
      {
        tema: 'En el restaurante',
        pregunta: 'Could I see the ______, please?',
        opciones: ['menu', 'recipe', 'notebook', 'sign'],
        correcta: 0,
        explicacion: '"Menu" es la carta del restaurante; "recipe" es una receta de cocina.'
      },
      {
        tema: 'Compras y servicios',
        pregunta: 'How ______ does it cost?',
        opciones: ['much', 'many', 'more', 'money'],
        correcta: 0,
        explicacion: 'Con precios usamos "how much": "How much does it cost?".'
      },
      {
        tema: 'Inglés profesional',
        pregunta: 'Please find the report ______.',
        opciones: ['attached', 'attach', 'attaching', 'attaches'],
        correcta: 0,
        explicacion: 'En correos profesionales: "Please find the report attached" (adjunto).'
      }
    ]
  },
  mayores: {
    titulo: 'Personas mayores (60+ años)',
    edad: 'Aprendizaje gradual, claro y significativo',
    icono: '👴',
    ejercicios: [
      {
        tema: 'Saludos y cortesía',
        pregunta: 'Good ______, Mrs. López! How are you today?',
        opciones: ['morning', 'night', 'bye', 'please'],
        correcta: 0,
        explicacion: 'Por la mañana usamos "Good morning" (buenos días).'
      },
      {
        tema: 'La familia',
        pregunta: "My son's daughter is my ______.",
        opciones: ['granddaughter', 'grandmother', 'niece', 'daughter'],
        correcta: 0,
        explicacion: 'La hija de tu hijo es tu "granddaughter" (nieta).'
      },
      {
        tema: 'Conversación cotidiana',
        pregunta: 'Could you say that ______, please?',
        opciones: ['again', 'very', 'always', 'today'],
        correcta: 0,
        explicacion: '"Again" significa "otra vez": "Could you say that again?" = "¿Podría repetirlo?".'
      },
      {
        tema: 'Pedir ayuda',
        pregunta: '______ you help me, please?',
        opciones: ['Could', 'Are', 'Do', 'Is'],
        correcta: 0,
        explicacion: 'Para pedir ayuda con cortesía usamos "Could you...?".'
      },
      {
        tema: 'Expresiones de cortesía',
        pregunta: 'A: Nice to meet you. — B: Nice to meet you, ______.',
        opciones: ['too', 'also', 'and', 'very'],
        correcta: 0,
        explicacion: 'La respuesta fija es "Nice to meet you, too" (igualmente).'
      },
      {
        tema: 'El clima',
        pregunta: "It's ______. Take your umbrella!",
        opciones: ['raining', 'sunny', 'snowing', 'windy'],
        correcta: 0,
        explicacion: 'Si necesitas paraguas ("umbrella"), "it\'s raining" = está lloviendo.'
      }
    ]
  }
};

/* ---------- ESTADO ---------- */
const progreso = {};        // progreso[clave] = [true, false, ...]
let claveActual = null;     // módulo abierto
let ejercicioActual = null; // índice del ejercicio abierto (null = lista)
let respondido = false;     // ya respondió el ejercicio actual

/* ---------- ABRIR / CERRAR MODAL ---------- */
function abrirModal(clave) {
  const d = datos[clave];
  if (!d) return;
  claveActual = clave;
  ejercicioActual = null;
  if (!progreso[clave]) progreso[clave] = d.ejercicios.map(() => false);
  renderLista();
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  claveActual = null;
  ejercicioActual = null;
  pararAudio();
}

/* ---------- MODAL INFORMATIVO: Términos y Privacidad ---------- */
const info = {
  terminos: {
    titulo: 'Términos de uso',
    subtitulo: 'El Inglés para Todos',
    items: [
      '"El Inglés para Todos" es una plataforma educativa con fines académicos, desarrollada como proyecto del curso Tecnopedagogía de la Universidad del Zulia.',
      'Los ejercicios y contenidos están disponibles para la práctica personal y educativa. Puedes usarlos en clase citando la fuente.',
      'Las cifras y datos de la sección "El inglés en cifras" provienen de las fuentes indicadas (Ethnologue, W3Techs, The World Factbook y Naciones Unidas).',
      'La plataforma no garantiza resultados de aprendizaje: el progreso depende de la práctica constante de cada persona.',
      'No se permite el uso comercial del material sin autorización del equipo.'
    ]
  },
  privacidad: {
    titulo: 'Política de privacidad',
    subtitulo: 'El Inglés para Todos',
    items: [
      'Esta plataforma no recopila datos personales: no hay formularios, registros ni cuentas de usuario.',
      'El progreso de los ejercicios se guarda únicamente en tu navegador mientras la página está abierta; al recargarla o cerrarla, se reinicia.',
      'No se usan cookies de seguimiento ni herramientas de publicidad.',
      'Las marcas, enlaces externos y contenidos citados pertenecen a sus respectivos dueños.',
      'Para dudas sobre privacidad, escribe a abienegomontiel@gmail.com.'
    ]
  }
};

function abrirInfo(tipo) {
  const d = info[tipo];
  if (!d) return;
  claveActual = null;
  ejercicioActual = null;
  pararAudio();
  document.getElementById('modalContenido').innerHTML = `
    <h2>${d.titulo}</h2>
    <div class="modal-edad">${d.subtitulo}</div>
    <ul class="info-lista">
      ${d.items.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ---------- VISTA 1: LISTA DE EJERCICIOS ---------- */
function renderLista() {
  const d = datos[claveActual];
  if (!d) return;
  ejercicioActual = null;
  const total = d.ejercicios.length;
  const completados = progreso[claveActual].filter(Boolean).length;

  document.getElementById('modalContenido').innerHTML = `
    <h2>${d.icono} ${d.titulo}</h2>
    <div class="modal-edad">🎯 ${d.edad}</div>
    <div class="progreso">
      <div class="barra"><span style="width:${(completados / total) * 100}%"></span></div>
      ${completados}/${total} completados
    </div>
    <p class="instruccion">Elige un tema para resolver su ejercicio de inglés:</p>
    <div class="modal-lista">
      ${d.ejercicios.map((ex, i) => {
        const hecho = progreso[claveActual][i];
        return `
        <button class="ejercicio-btn ${hecho ? 'completado' : ''}" onclick="renderEjercicio(${i})">
          <span class="num">${hecho ? '✓' : i + 1}</span>
          <span class="tema">${ex.tema}</span>
          <span class="estado">${hecho ? '✅' : '→'}</span>
        </button>`;
      }).join('')}
    </div>
  `;
}

/* ---------- VISTA 2: EJERCICIO ---------- */
function renderEjercicio(i) {
  const d = datos[claveActual];
  if (!d || !d.ejercicios[i]) return;
  const ex = d.ejercicios[i];
  ejercicioActual = i;
  respondido = false;
  const esUltimo = i === d.ejercicios.length - 1;
  const conAudio = 'speechSynthesis' in window;

  document.getElementById('modalContenido').innerHTML = `
    <button class="btn-volver" onclick="renderLista()">← Volver a los ejercicios</button>
    <div><span class="ejercicio-etiqueta">${d.icono} ${ex.tema}</span></div>
    <div class="pregunta-box">
      <div class="texto">${ex.pregunta}</div>
      ${conAudio ? '<button class="btn-audio" title="Escuchar en inglés" onclick="escucharPregunta()">🔊</button>' : ''}
    </div>
    <p class="instruccion">Elige la opción correcta para completar la oración:</p>
    <div class="opciones" id="opciones">
      ${ex.opciones.map((op, j) => `
        <button class="opcion" onclick="responder(${j})">
          <span class="letra">${'ABCD'[j]}</span> ${op}
        </button>`).join('')}
    </div>
    <div id="zonaFeedback"></div>
    <div class="ejercicio-acciones" id="acciones" hidden>
      <button class="btn-secundario" onclick="renderLista()">Volver a los ejercicios</button>
      ${esUltimo ? '' : '<button class="btn-primario" onclick="renderEjercicio(ejercicioActual + 1)">Siguiente ejercicio →</button>'}
    </div>
  `;
}

/* ---------- RESPONDER ---------- */
function responder(j) {
  if (respondido || ejercicioActual === null) return;
  respondido = true;

  const ex = datos[claveActual].ejercicios[ejercicioActual];
  const acierto = j === ex.correcta;

  document.querySelectorAll('#opciones .opcion').forEach((btn, k) => {
    btn.disabled = true;
    if (k === ex.correcta) btn.classList.add('correcta');
    else if (k === j) btn.classList.add('incorrecta');
  });

  document.getElementById('zonaFeedback').innerHTML = `
    <div class="feedback ${acierto ? 'ok' : 'error'}">
      <strong>${acierto
        ? '✅ ¡Correcto! Great job 🎉'
        : '❌ Incorrecto. La respuesta correcta es: ' + ex.opciones[ex.correcta]}</strong>
      <span class="explica">${ex.explicacion}</span>
    </div>
  `;

  progreso[claveActual][ejercicioActual] = true;
  document.getElementById('acciones').hidden = false;
}

/* ---------- AUDIO (pronunciación con la voz del navegador) ---------- */
function escucharPregunta() {
  if (!('speechSynthesis' in window) || ejercicioActual === null) return;
  const ex = datos[claveActual].ejercicios[ejercicioActual];
  window.speechSynthesis.cancel();
  const voz = new SpeechSynthesisUtterance(ex.pregunta.replace(/_+/g, 'blank'));
  voz.lang = 'en-US';
  voz.rate = 0.9;
  window.speechSynthesis.speak(voz);
}

function pararAudio() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

/* ---------- TECLADO: ESC vuelve a la lista o cierra ---------- */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (document.getElementById('modalOverlay').classList.contains('active') && ejercicioActual !== null) {
    renderLista();
  } else {
    cerrarModal();
  }
});

/* ---------- Smooth scroll para enlaces internos ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelector('nav').classList.remove('open');
      }
    }
  });
});

/* ---------- Nav activo según scroll ---------- */
window.addEventListener('scroll', () => {
  const secciones = ['inicio', 'ninos', 'adolescentes', 'jovenes', 'adultos', 'mayores', 'mundo', 'contacto'];
  let actual = 'inicio';
  secciones.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) actual = id;
  });
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + actual);
  });
});
