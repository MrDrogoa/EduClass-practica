<script setup>
// Importa el ícono de usuarios de FontAwesome
import { faUsers } from "@fortawesome/free-solid-svg-icons";
// Importa el componente FontAwesomeIcon para mostrar íconos en Vue
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
<template>
  <!-- Botón de login con ícono y estilos personalizados -->
  <button
    type="submit"
    class="bg-[#5e35ff] py-2 px-5 text-white font-medium rounded-3xl cursor-pointer hover:bg-[#4926d6] transition"
  >
    <!-- Muestra el ícono de usuarios y el texto 'Login' -->
    <FontAwesomeIcon :icon="faUsers" /> Register
  </button>
</template>

<style lang="scss" scoped></style>
