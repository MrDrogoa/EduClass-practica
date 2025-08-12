<script setup>
// Importa el logo de la aplicación
import logo from "../assets/logo.svg";
// Importa el componente FontAwesomeIcon para mostrar íconos en Vue
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Importa el ícono de menú hamburguesa
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Importa el componente de botón login
import ButtonLoginComponents from "./ButtonLoginComponents.vue";
// Importa el componente de botón register
import ButtonRegisterComponents from "./ButtonRegisterComponents.vue";
// Importa ref de Vue para manejar el estado del menú
import { ref } from "vue";
// Variable reactiva para controlar si el menú móvil está abierto o cerrado
const menuOpen = ref(false);
</script>
<template>
  <!-- Sección de la barra de navegación principal -->
  <section class="bg-[#339B9F]">
    <nav class="px-5 md:px-6 lg:px-8 py-3 max-w-[1300px] m-auto">
      <article class="flex justify-between items-center text-white">
        <!-- Logo y enlace a la página principal -->
        <div>
          <router-link to="/">
            <img :src="logo" alt="logo" class="w-40 md:w-50" />
          </router-link>
        </div>
        <!-- Menú de navegación para pantallas grandes -->
        <div class="hidden lg:block">
          <ul class="flex items-center gap-3 font-secondary font-medium">
            <li class="cursor-pointer">
              <router-link to="/">Home</router-link>
            </li>
            <li class="cursor-pointer mx-3">
              <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <!-- Botón de login -->
            <router-link to="/login">
              <ButtonLoginComponents />
            </router-link>
            <router-link to="/register">
              <ButtonRegisterComponents />
            </router-link>
          </ul>
        </div>
        <!-- Ícono de menú hamburguesa para pantallas pequeñas -->
        <div class="block lg:hidden">
          <FontAwesomeIcon
            :icon="faBars"
            class="text-2xl cursor-pointer"
            @click="menuOpen = !menuOpen"
          />
        </div>
        <!-- Menú desplegable para dispositivos móviles -->
        <div
          v-if="menuOpen"
          class="lg:hidden right-0 top-18 absolute bg-[#339B9F] w-full shadow-lg z-10"
        >
          <ul
            class="flex flex-col items-center gap-6 py-4 font-secondary font-medium"
          >
            <li class="cursor-pointer">
              <router-link to="/" @click="menuOpen = false">Inicio</router-link>
            </li>
            <li class="cursor-pointer">
              <router-link to="/dashboard" @click="menuOpen = false"
                >Dashboard</router-link
              >
            </li>
            <!-- Botón de login en menú móvil -->
            <router-link to="/login">
              <ButtonLoginComponents />
            </router-link>
          </ul>
        </div>
      </article>
    </nav>
  </section>
</template>

<style lang="scss" scoped></style>
<!-- Bloque de estilos para el componente, actualmente vacío -->
