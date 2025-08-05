// Obtener elementos del DOM
const contactButton = document.querySelector(".button__navbar"); // Botón desktop
const contactButtonMobile = document.querySelector(".mobile__contact"); // Botón móvil
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");
const contactForm = document.getElementById("contactForm");

// Función para abrir modal
function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Función para cerrar modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Event listeners para ambos botones de contacto
contactButton.addEventListener("click", openModal);

// Si existe el botón móvil, agregar event listener
if (contactButtonMobile) {
  contactButtonMobile.addEventListener("click", () => {
    // Abrir modal
    openModal();
  });
}

// menu burguer
const menu = document.querySelector(".burguer");
const menuList = document.querySelector(".list__menu-1");

menu.addEventListener("click", () => {
  // Verificar si el menú está visible o no
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
});

// Cerrar modal con la X
closeBtn.addEventListener("click", closeModal);

// Cerrar modal haciendo clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Manejar envío del formulario
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  // procesar los datos (enviar a servidor, etc.)
  console.log("Datos del formulario:", { nombre, correo, mensaje });

  // Mostrar mensaje de confirmación
  alert("¡Gracias por tu interes!");

  // Limpiar formulario y cerrar modal
  contactForm.reset();
  closeModal();
});
