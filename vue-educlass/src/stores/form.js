// Vuex store module para manejar el token de autenticación
export default {
  namespaced: true, // <-- Agrega esta línea
  // Estado inicial del módulo
  state: {
    // Guarda el token desde localStorage si existe, o null si no
    token: localStorage.getItem("token") || null,
  },
  // Mutaciones para modificar el estado
  mutations: {
    // Guarda el token en el estado y en localStorage
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    // Elimina el token del estado y de localStorage
    clearToken(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  // Acciones para llamar a las mutaciones (pueden ser asíncronas)
  actions: {
    // Acción para guardar el token usando la mutación
    saveToken({ commit }, token) {
      commit("setToken", token);
    },
    // Acción para eliminar el token usando la mutación
    removeToken({ commit }) {
      commit("clearToken");
    },
  },
  // Getters para acceder al estado de forma más sencilla
  getters: {
    // Devuelve el token actual
    getToken: (state) => state.token,
    // Devuelve true si hay un token (usuario autenticado)
    isAuthenticated: (state) => !!state.token,
  },
};
