<script setup>
// Importa el componente de botón personalizado
import ButtonRegisterComponents from "./ButtonRegisterComponents.vue"; // Botón para registrar usuario
// Importa reactive para crear objetos reactivos
import { reactive } from "vue"; // Permite crear objetos reactivos
// Importa el router para la navegación
import router from "../router"; // Permite la navegación entre vistas
// Importa el componente FontAwesomeIcon para mostrar íconos en Vue
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // Componente para íconos
// Importa el ícono de flecha para el select
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; // Ícono de flecha para el select
import { useStore } from "vuex"; // Importa useStore

// Importa el store de Vuex para acceder al estado global
import { auth, db } from "../stores/firebase"; // Instancias de autenticación y base de datos
import { createUserWithEmailAndPassword } from "firebase/auth"; // Función para crear usuario con correo y contraseña
import { setDoc, doc } from "firebase/firestore"; // Funciones para guardar documentos en Firestore

const store = useStore(); // Obtén la instancia del store

// Objeto reactivo para almacenar los datos del usuario
const user = reactive({
  nombre: "", // Nombre del usuario
  correo: "", // Correo electrónico
  contraseña: "", // Contraseña
  edad: "", // Edad
  rol: "", // usa 'rol' en vez de 'cargo' para consistencia
});

// Función que maneja el envío del formulario
const handleSubmit = async () => {
  // Validación de campos obligatorios
  if (
    !user.nombre ||
    !user.correo ||
    !user.contraseña ||
    !user.edad ||
    !user.rol
  ) {
    alert("Rellena todos los campos, por favor"); // Muestra alerta si falta algún campo
    return;
  }

  try {
    // Crea el usuario en Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.correo,
      user.contraseña
    ); // Crea usuario en Firebase Auth
    const uid = userCredential.user.uid; // Obtiene el UID del usuario

    // Obtén el JWT (ID Token)
    const idToken = await userCredential.user.getIdToken();

    // Guarda el token en Vuex y localStorage
    store.dispatch("form/saveToken", idToken);

    // Guarda datos adicionales en Firestore
    await setDoc(doc(db, "usuarios", uid), {
      nombre: user.nombre, // Guarda el nombre
      correo: user.correo, // Guarda el correo
      edad: user.edad, // Guarda la edad
      rol: user.rol, // estudiante, profesor, admin
    });

    // Limpia los campos del formulario
    user.nombre = "";
    user.correo = "";
    user.contraseña = "";
    user.edad = "";
    user.rol = "";

    // Redirige al login
    router.push({ name: "login" }); // Navega a la vista de login
  } catch (error) {
    alert(error.message); // Muestra mensaje de error si falla el registro
  }
};
</script>
<template>
  <!-- Contenedor principal centrado -->
  <div class="flex items-center justify-center p-4">
    <!-- Centra el formulario en la pantalla -->
    <!-- Formulario de registro de usuario -->
    <!--Ejecuta handleSubmit al enviar el formulario-->
    <form
      @submit.prevent="handleSubmit"
      class="backdrop-blur-xl bg-white/30 rounded-3xl shadow-lg p-8 w-full max-w-md"
    >
      <!-- Título del formulario -->
      <h2
        class="text-2xl font-primary font-bold mb-6 text-center text-[#6e4afd]"
      >
        <!-- Título del formulario de registro -->
        Registro
      </h2>
      <!-- Campo de nombre -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de nombre -->
        <label for="nombre" class="block text-[#339B9F] font-medium mb-2"
          >Nombre</label
        >
        <!-- Enlaza el input con user.nombre -->
        <input
          type="text"
          id="nombre"
          name="nombre"
          v-model="user.nombre"
          placeholder="escribe tu nombre"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>

      <!-- Campo de correo -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de correo -->
        <label for="correo" class="block text-[#339B9F] font-medium mb-2"
          >Correo</label
        >
        <!-- Enlaza el input con user.correo -->
        <input
          type="email"
          id="correo"
          v-model="user.correo"
          name="correo"
          placeholder="escribe tu correo"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>
      <!-- Campo de contraseña -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de contraseña -->
        <label for="nombre" class="block text-[#339B9F] font-medium mb-2"
          >Contraseña</label
        >
        <!-- Enlaza el input con user.contraseña -->
        <input
          type="password"
          id="contraseña"
          v-model="user.contraseña"
          name="contraseña"
          placeholder="escribe tu contraseña"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>

      <!-- Campo de edad -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de edad -->
        <label for="nombre" class="block text-[#339B9F] font-medium mb-2"
          >Edad</label
        >
        <!-- Enlaza el input con user.edad -->
        <input
          type="number"
          id="edad"
          v-model="user.edad"
          name="edad"
          placeholder="escribe tu edad"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>
      <!-- Campo de cargo con select y ícono -->
      <div class="mb-4 relative font-secondary">
        <!-- Etiqueta para el campo de rol -->
        <label for="cargo" class="block text-[#339B9F] font-medium mb-2">
          Rol
        </label>
        <!-- Enlaza el select con user.rol -->
        <select
          id="rol"
          v-model="user.rol"
          name="rol"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F] bg-white appearance-none"
        >
          <option
            value="Selecciona tu rol"
            disabled
            selected
            class="text-[#9D9D9D]"
          >
            Selecciona tu rol
            <!-- Opción por defecto -->
          </option>
          <option value="estudiante" class="text-[#9D9D9D]">Estudiante</option>
          <!-- Opción estudiante -->
          <option value="profesor" class="text-[#9D9D9D]">Profesor</option>
          <!-- Opción profesor -->
          <option value="admin" class="text-[#9D9D9D]">Admin</option>
          <!-- Opción admin -->
        </select>
        <!-- Ícono de flecha para el select -->
        <span class="absolute top-10 right-4 pointer-events-none">
          <FontAwesomeIcon :icon="faCaretDown" class="text-[#FF5050]" />
          <!-- Ícono de flecha -->
        </span>
      </div>
      <!-- Botón de envío del formulario -->
      <div class="flex justify-center font-secondary mt-6">
        <ButtonRegisterComponents />
        <!-- Componente de botón para enviar el formulario -->
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
<!-- Bloque de estilos para el componente, actualmente vacío -->
