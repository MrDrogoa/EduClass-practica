<script setup>
// Importa el componente FontAwesomeIcon para mostrar íconos en Vue
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Importa el ícono de flecha para el select
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// Importa el componente de botón personalizado
import ButtonComponents from "./ButtonComponents.vue";
// Importa reactive para crear objetos reactivos
import { reactive } from "vue";
// Importa el router para la navegación
import router from "../router";

// Importa el store de Vuex para acceder al estado global
import { useStore } from "vuex";
const store = useStore();

// Objeto reactivo para almacenar los datos del usuario
const user = reactive({
  nombre: "",
  cargo: "",
  correo: "",
});

// Función que maneja el envío del formulario
const handleSubmit = () => {
  // Validación de campos obligatorios
  if (!user.nombre || !user.cargo || !user.correo) {
    alert("Rellena todos los campos, por favor");
    return;
  }

  // Guarda el usuario en el store de Vuex
  store.commit("form/addUsuario", { ...user });

  // Limpia los campos del formulario
  user.nombre = "";
  user.cargo = "";
  user.correo = "";

  // Redirige al dashboard
  router.push({ name: "dashboard" });
};
</script>
<template>
  <!-- Contenedor principal centrado -->
  <div class="flex items-center justify-center p-4">
    <!-- Formulario de registro de usuario -->
    <form
      @submit.prevent="handleSubmit"
      class="backdrop-blur-xl bg-white/30 rounded-3xl shadow-lg p-8 w-full max-w-md"
    >
      <!-- Título del formulario -->
      <h2
        class="text-2xl font-primary font-bold mb-6 text-center text-[#FF5050]"
      >
        Registro
      </h2>
      <!-- Campo de nombre -->
      <div class="mb-4 font-secondary">
        <label for="nombre" class="block text-[#339B9F] font-medium mb-2"
          >Nombre</label
        >
        <input
          type="text"
          id="nombre"
          name="nombre"
          v-model="user.nombre"
          placeholder="escribe tu nombre"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>
      <!-- Campo de cargo con select y ícono -->
      <div class="mb-4 relative font-secondary">
        <label for="cargo" class="block text-[#339B9F] font-medium mb-2">
          Cargo
        </label>
        <select
          id="cargo"
          v-model="user.cargo"
          name="cargo"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F] bg-white appearance-none"
        >
          <option
            value="Selecciona tu cargo"
            disabled
            selected
            class="text-[#9D9D9D]"
          >
            Selecciona tu cargo
          </option>
          <option value="estudiante" class="text-[#9D9D9D]">Estudiante</option>
          <option value="profesor" class="text-[#9D9D9D]">Profesor</option>
        </select>
        <!-- Ícono de flecha para el select -->
        <span class="absolute top-10 right-4 pointer-events-none">
          <FontAwesomeIcon :icon="faCaretDown" class="text-[#FF5050]" />
        </span>
      </div>
      <!-- Campo de correo -->
      <div class="mb-6 font-secondary">
        <label for="correo" class="block text-[#339B9F] font-medium mb-2"
          >Correo</label
        >
        <input
          type="email"
          id="correo"
          v-model="user.correo"
          name="correo"
          placeholder="escribe tu correo"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>
      <!-- Botón de envío del formulario -->
      <div class="flex justify-center font-secondary">
        <ButtonComponents type="submit" />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
<!-- Bloque de estilos para el componente, actualmente vacío -->
