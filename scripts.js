// === ABRIR EL SOBRE Y MOSTRAR LA CARTA ===
document.addEventListener('DOMContentLoaded', () => {
  const sobre = document.getElementById('sobre');
  const audio = document.getElementById('magia');

  sobre.addEventListener('click', () => {
    audio.play().catch(e => console.log('No se pudo reproducir el audio:', e));
    document.body.classList.add('abierto');
  });

  iniciarContador();
  configurarModalConfirmacion();
});

// === FUNCIONES ===

// ⏳ Contador circular hacia el evento
function iniciarContador() {
  const fechaEvento = new Date("May 23, 2025 19:30:00").getTime();

  const spanDias = document.getElementById("dias");
  const spanHoras = document.getElementById("horas");
  const spanMinutos = document.getElementById("minutos");
  const spanSegundos = document.getElementById("segundos");

  if (!spanDias || !spanHoras) return;

  setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    if (distancia <= 0) {
      spanDias.innerText = "0";
      spanHoras.innerText = "0";
      spanMinutos.innerText = "0";
      spanSegundos.innerText = "0";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    spanDias.innerText = dias;
    spanHoras.innerText = horas;
    spanMinutos.innerText = minutos;
    spanSegundos.innerText = segundos;
  }, 1000);
}

// 📍 Ir a una sección con scroll suave
function irASeccion(id) {
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
}

// ✅ Modal de confirmación
function configurarModalConfirmacion() {
  const modal = document.getElementById("modalConfirmacion");
  const botonAbrir = document.querySelector(".boton-confirmar");
  const botonCerrar = document.querySelector(".cerrar-modal");

  if (!modal || !botonAbrir || !botonCerrar) return;

  botonAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  botonCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
