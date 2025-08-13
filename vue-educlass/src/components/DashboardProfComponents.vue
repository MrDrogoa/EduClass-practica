<script setup>
// Importa las funciones necesarias de Vue y Vuex
import { ref, onMounted } from "vue";
import router from "../router";
import { useStore } from "vuex";

// Obtiene la instancia del store de Vuex
const store = useStore();
// Define una variable reactiva para almacenar los profesores disponibles
const profesoresDisponibles = ref([]);

// Cuando el componente se monta...
onMounted(async () => {
  // Verifica si el usuario está autenticado usando el getter de Vuex
  // Con este if fuerzo el error
  //   if (false) {
  if (store.getters["form/isAuthenticated"]) {
    // Realiza una petición para obtener los datos de los profesores
    const response = await fetch("/src/api/profesores.json");
    const data = await response.json();
    // Filtra los profesores que están disponibles
    profesoresDisponibles.value = data.filter(
      (prof) => prof.disponibilidad === false
    );
  } else {
    // Si no está autenticado, redirige al usuario a la página de error
    router.push("/errorauth");
  }
});
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
              Profesor
              <!-- Nombre del profesor -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Curso
              <!-- Nombre del curso -->
            </th>
            <th
              class="bg-[#FF5050] text-white py-3 px-2 text-center rounded-2xl"
            >
              Disponibilidad
              <!-- Disponibilidad del profesor -->
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Itera sobre la lista de profesores disponibles y muestra cada uno en una fila -->
          <tr v-for="(prof, index) in profesoresDisponibles" :key="index">
            <td
              class="bg-gray-100 text-center py-3 px-2 font-medium rounded-2xl"
            >
              {{ index + 1 }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              {{ prof.nombre }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              {{ prof.curso }}
            </td>
            <td class="bg-gray-100 text-center py-3 px-2 rounded-2xl">
              {{ prof.disponibilidad ? "Disponible" : "No disponible" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
