<script setup>
import ButtonLoginComponents from "./ButtonLoginComponents.vue"; // Importa el componente de botón de login
import { auth, db } from "../stores/firebase"; // Importa la instancia de autenticación y base de datos
import { signInWithEmailAndPassword } from "firebase/auth"; // Importa la función para iniciar sesión con correo y contraseña
import { doc, getDoc } from "firebase/firestore"; // Importa funciones para obtener documentos de Firestore
import { useStore } from "vuex";
import { ref } from "vue"; // Importa ref para crear variables reactivas
import router from "../router";
const correo = ref(""); // Variable reactiva para el correo
const contraseña = ref(""); // Variable reactiva para la contraseña

// async login(){
//   try {
//     // validar que el usuario exista en autenticación de firebase
//     if (correo.value && contraseña.value) {
//       // Si ambos campos están llenos, intenta iniciar sesión
//       await login();
//     } else {
//       alert("Por favor, completa todos los campos.");
//     }
//   } catch (error) {
//     alert(error.message);
//   }
//   // preparar el login data
//   const loginData = {
//     email: correo.value,
//     password: contraseña.value
//   };

//   // Llama a la función de inicio de sesión
//   await login(loginData);
//   router.push({ name: "dashboard" });
// }

const store = useStore();

const handleLogin = async () => {
  // Función que maneja el inicio de sesión
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      correo.value,
      contraseña.value
    ); // Inicia sesión con correo y contraseña
    const uid = userCredential.user.uid; // Obtiene el UID del usuario autenticado

    // Obtén datos del usuario
    const userDoc = await getDoc(doc(db, "usuarios", uid)); // Obtiene el documento del usuario en Firestore
    const userData = userDoc.data(); // Extrae los datos del usuario

    // Validación: si no hay datos, muestra alerta y termina
    if (!userData) {
      router.push({ name: "error" });
      return;
    }

    // Guarda el token en Vuex para activar el guardia global
    const idToken = await userCredential.user.getIdToken();
    store.dispatch("form/saveToken", idToken);
    // console.log(idToken);
    // Redirige según el rol
    if (userData.rol === "admin") {
      router.push({ name: "dashboard" });
    } else {
      router.push({ name: "home" });
    }
  } catch (error) {
    alert(error.message); // Muestra un mensaje de error si falla el login
  }
};
</script>
<template>
  <!-- Contenedor principal centrado -->
  <div class="flex items-center justify-center p-4">
    <!-- Centra el formulario en la pantalla -->
    <!-- Formulario de registro de usuario -->
    <!-- Ejecuta handleLogin al enviar el formulario -->
    <form
      @submit.prevent="handleLogin"
      class="backdrop-blur-xl bg-white/30 rounded-3xl shadow-lg p-8 w-full max-w-md"
    >
      <!-- Título del formulario -->
      <h2
        class="text-2xl font-primary font-bold mb-6 text-center text-[#FF5050]"
      >
        Ingresa
        <!-- Título del formulario de login -->
      </h2>
      <!-- Campo de correo -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de correo -->
        <label for="correo" class="block text-[#339B9F] font-medium mb-2"
          >Correo</label
        >
        <!-- Enlaza el input con la variable reactiva correo -->
        <input
          type="email"
          id="correo"
          v-model="correo"
          name="correo"
          placeholder="escribe tu correo"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>
      <!-- Campo de contraseña -->
      <div class="mb-4 font-secondary">
        <!-- Etiqueta para el campo de contraseña -->
        <label for="contraseña" class="block text-[#339B9F] font-medium mb-2"
          >Contraseña</label
        >
        <!-- Enlaza el input con la variable reactiva contraseña -->
        <input
          type="password"
          id="contraseña"
          v-model="contraseña"
          name="contraseña"
          placeholder="escribe tu contraseña"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339B9F]"
        />
      </div>

      <!-- Botón de envío del formulario -->
      <div class="flex justify-center mt-6 font-secondary">
        <ButtonLoginComponents />
        <!-- Componente de botón para enviar el formulario -->
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
