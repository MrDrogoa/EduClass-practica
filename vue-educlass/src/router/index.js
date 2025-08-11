// Importa las funciones necesarias para crear el router y el historial web
import { createRouter, createWebHistory } from "vue-router";
// Importa las vistas principales de la aplicación
import HomeViews from "../views/HomeViews.vue";
import LoginViews from "../views/LoginViews.vue";
import DashboardViews from "../views/DashboardViews.vue";

// Define las rutas entre las diferentes vistas de la aplicación
const router = createRouter({
  history: createWebHistory(), // Usa historial HTML5 para navegación
  routes: [
    {
      path: "/", // Ruta principal
      name: "home", // Nombre de la ruta
      component: HomeViews, // Componente que se renderiza
    },
    {
      path: "/login", // Ruta de login
      name: "login",
      component: LoginViews,
    },
    {
      path: "/dashboard", // Ruta del dashboard
      name: "dashboard",
      component: DashboardViews,
      meta: { requiresAuth: true }, // Indica que requiere autenticación
    },
  ],
});

// Guardia global para rutas protegidas usando Vuex
router.beforeEach((to, from, next) => {
  // Accede al store global de Vuex
  const store =
    router.app &&
    router.app.config &&
    router.app.config.globalProperties &&
    router.app.config.globalProperties.$store;
  // Si usas composition API, puedes importar el store directamente si es necesario
  // const store = useStore();

  // Verifica si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    // Verifica si hay un usuario autenticado en Vuex
    const isAuthenticated = store && store.state.form.isAuthenticated;
    if (!isAuthenticated) {
      // Si no está autenticado, redirige a login
      next({ name: "login" });
    } else {
      // Si está autenticado, permite el acceso
      next();
    }
  } else {
    // Si no requiere autenticación, permite el acceso
    next();
  }
});

export default router; // Exporta el router para ser usado en la aplicación
