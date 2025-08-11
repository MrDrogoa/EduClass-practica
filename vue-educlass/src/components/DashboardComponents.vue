<script setup>
// Importa el store de Vuex para acceder al estado global de la aplicación
import { useStore } from "vuex";
const store = useStore();
// Obtiene la lista de usuarios desde el estado del formulario en Vuex
const usuarios = store.state.form.usuarios;
</script>
<template>
  <!-- Sección principal centrada en la pantalla -->
  <section class="flex items-center justify-center">
    <div
      class="w-full max-w-[1300px] m-auto backdrop-blur-3xl font-secondary bg-white/60 rounded-3xl shadow-lg p-6 md:p-10"
    >
      <!-- Tabla que muestra la información de los usuarios -->
      <table class="w-full rounded-2xl overflow-hidden">
        <thead>
          <tr>
            <!-- Encabezados de la tabla: ID, Nombre, Cargo, Correo -->
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              ID
              <!-- Identificador del usuario (índice + 1) -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Nombre
              <!-- Nombre del usuario -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Cargo
              <!-- Cargo o rol del usuario -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Correo
              <!-- Correo electrónico del usuario -->
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Itera sobre la lista de usuarios y muestra cada uno en una fila -->
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td
              class="bg-gray-100 text-center py-3 px-2 font-medium rounded-2xl"
            >
              <!-- Muestra el índice como ID -->
              {{ index + 1 }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el nombre del usuario -->
              {{ usuario.nombre }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el cargo del usuario -->
              {{ usuario.cargo }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el correo del usuario -->
              {{ usuario.correo }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
<!-- Bloque de estilos para el componente, actualmente vacío -->
