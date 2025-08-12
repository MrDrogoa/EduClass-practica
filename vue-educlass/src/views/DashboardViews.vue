<script setup>
import DashboardComponents from "../components/DashboardComponents.vue"; // Importa el componente del dashboard
import HeaderLayouts from "../layouts/HeaderLayouts.vue"; // Importa el layout de encabezado
import { ref, onMounted } from "vue"; // Importa el hook para ejecutar código al montar el componente
import { db } from "../stores/firebase"; // Importa la instancia de base de datos
import { collection, getDocs } from "firebase/firestore"; // Importa funciones para obtener documentos de Firestore

const usuarios = ref([]); // Define la lista de usuarios como una referencia reactiva
const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "usuarios")); // Obtiene todos los documentos de la colección 'usuarios'
  usuarios.value = []; // Inicializa la lista de usuarios
  querySnapshot.forEach((doc) => {
    usuarios.value.push(doc.data()); // Agrega los datos de cada usuario al array
  });
};
onMounted(getAllUsers); // Ejecuta la función al montar el componente
</script>
<template>
  <HeaderLayouts />
  <!-- Muestra el encabezado -->
  <DashboardComponents :usuarios="usuarios" />
  <!-- Pasa la lista de usuarios al componente Dashboard -->
</template>

<style lang="scss" scoped></style>
