document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll para los enlaces del menú
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Simulador de acceso al BLSG
  const blsgForm = document.getElementById('blsgForm');
  const resultado = document.getElementById('resultadoSimulador');

  if (blsgForm && resultado) {
    blsgForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const datos = new FormData(blsgForm);
      const ingresos = datos.get('ingresos');
      const bienes = datos.get('bienes');
      const vulnerabilidad = datos.get('vulnerabilidad');

      let mensaje = '';

      if (ingresos === 'si' && bienes === 'no') {
        mensaje = '✅ Probablemente califiques para el Beneficio de Litigar sin Gastos. Consultá con un abogado/a o defensor público.';
      } else if (vulnerabilidad === 'si') {
        mensaje = '⚠️ Aunque tengas algunos recursos, si estás en situación de vulnerabilidad podrías calificar. Consultá en el juzgado.';
      } else {
        mensaje = '❌ Por tus respuestas, puede que no califiques directamente. Aun así, podés intentar solicitarlo justificando tu situación.';
      }

      resultado.innerHTML = `<p style="margin-top: 15px;">${mensaje}</p>
                             <button onclick="resultado.innerHTML = ''" style="margin-top: 10px;">Cerrar</button>`;
    });
  }

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      // Cerrar otros abiertos
      document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
          item.classList.remove('open');
        }
      });

      // Alternar visibilidad
      answer.classList.toggle('open');
    });
  });

  // Modal control
  const modal = document.getElementById("modal");

  if (modal) {
    window.openModal = function () {
      modal.style.display = "block";
    }

    window.closeModal = function () {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }
});
