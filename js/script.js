  // Datos de cada sección (extraídos del PDF)
  const datos = {
    ninos: {
      titulo: 'Niños (6 – 11 años)',
      edad: 'Aprendizaje lúdico y visual',
      items: [
        'Saludos y presentaciones básicas',
        'Colores, números, animales, familia y partes del cuerpo',
        'Canciones infantiles y videos cortos',
        'Juegos de asociación imagen-palabra',
        'Actividades de repetición, pronunciación y reconocimiento auditivo'
      ]
    },
    adolescentes: {
      titulo: 'Adolescentes (12 – 17 años)',
      edad: 'Comunicación cotidiana y escolar',
      items: [
        'Rutinas y actividades diarias',
        'Gustos, preferencias, música, deportes y entretenimiento',
        'Vocabulario escolar y expresiones frecuentes',
        'Diálogos y situaciones comunicativas',
        'Retos, quizzes y actividades interactivas'
      ]
    },
    jovenes: {
      titulo: 'Jóvenes (18 – 25 años)',
      edad: 'Inglés académico, social y profesional inicial',
      items: [
        'Inglés para estudios, viajes y vida social',
        'Tecnología y comunicación digital',
        'Conversaciones y expresiones naturales',
        'Preparación para entrevistas y contextos académicos/profesionales',
        'Actividades de comprensión auditiva y expresión oral'
      ]
    },
    adultos: {
      titulo: 'Adultos (26 – 59 años)',
      edad: 'Inglés funcional para la vida diaria y el trabajo',
      items: [
        'Inglés para el trabajo y atención al público',
        'Situaciones de viaje: aeropuerto, hotel, restaurante y transporte',
        'Compras, servicios y comunicación cotidiana',
        'Vocabulario profesional y expresiones funcionales',
        'Actividades breves para personas con poco tiempo disponible'
      ]
    },
    mayores: {
      titulo: 'Personas mayores (60+ años)',
      edad: 'Aprendizaje gradual, claro y significativo',
      items: [
        'Saludos, familia y conversaciones cotidianas',
        'Vocabulario de uso frecuente',
        'Ejercicios cortos y progresivos',
        'Videos con pronunciación lenta y clara',
        'Actividades de memoria, asociación y conversación'
      ]
    }
  };

  function abrirModal(clave) {
    const d = datos[clave];
    if (!d) return;
    document.getElementById('modalTitulo').textContent = d.titulo;
    document.getElementById('modalEdad').textContent = '🎯 ' + d.edad;
    const ul = document.getElementById('modalContenido');
    ul.innerHTML = d.items.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Cerrar con tecla ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
  });

  // Smooth scroll para enlaces internos
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

  // Nav activo según scroll
  window.addEventListener('scroll', () => {
    const secciones = ['inicio','ninos','adolescentes','jovenes','adultos','mayores','recursos','contacto'];
    let actual = 'inicio';
    secciones.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) actual = id;
    });
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + actual);
    });
  });