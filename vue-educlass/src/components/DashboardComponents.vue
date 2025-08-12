<script setup>
// Recibe la lista de usuarios como prop desde el componente padre
defineProps({ usuarios: Array }); // Define la propiedad 'usuarios' que será pasada desde el componente padre
</script>
<template>
  <!-- Sección principal centrada en la pantalla -->
  <section class="flex items-center justify-center">
    <!-- Centra el contenido vertical y horizontalmente -->
    <div
      class="w-full max-w-[1300px] m-auto backdrop-blur-3xl font-secondary bg-white/60 rounded-3xl shadow-lg p-6 md:p-10"
    >
      <!-- Contenedor principal con estilos de fondo, borde y sombra -->
      <!-- Tabla que muestra la información de los usuarios -->
      <table class="w-full rounded-2xl overflow-hidden">
        <!-- Tabla con bordes redondeados y sin desbordamiento -->
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
              Correo
              <!-- Correo electrónico del usuario -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Contraseña
              <!-- Contraseña del usuario -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Edad
              <!-- Edad del usuario -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Rol
              <!-- Rol del usuario -->
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Itera sobre la lista de usuarios y muestra cada uno en una fila -->
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <!-- Recorre cada usuario y lo muestra en una fila -->
            <td
              class="bg-gray-100 text-center py-3 px-2 font-medium rounded-2xl"
            >
              <!-- Muestra el índice como ID -->
              {{ index + 1 }}
              <!-- ID generado por el índice del array -->
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el nombre del usuario -->
              {{ usuario.nombre }}
              <!-- Nombre del usuario -->
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el correo del usuario -->
              {{ usuario.correo }}
              <!-- Correo electrónico del usuario -->
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra la contraseña del usuario -->
              {{ usuario.contraseña }}
              <!-- Contraseña del usuario -->
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra la edad del usuario -->
              {{ usuario.edad }}
              <!-- Edad del usuario -->
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              <!-- Muestra el rol del usuario -->
              {{ usuario.rol }}
              <!-- Rol del usuario -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
<!-- Bloque de estilos para el componente, actualmente vacío -->
