// Módulo Vuex para manejar el estado relacionado con el formulario y usuarios
export default {
  // Permite que el módulo sea namespaced para evitar conflictos en el store global
  namespaced: true,
  // Estado inicial del módulo
  state: () => ({
    usuarios: [], // Lista de usuarios registrados
    isAuthenticated: false, // Indica si hay un usuario autenticado
  }),
  // Mutaciones para modificar el estado
  mutations: {
    // Agrega un usuario a la lista y marca como autenticado
    addUsuario(state, usuario) {
      state.usuarios.push(usuario);
      state.isAuthenticated = true;
    },
    // Cierra sesión y limpia la lista de usuarios
    logout(state) {
      state.isAuthenticated = false;
      state.usuarios = [];
    },
  },
};
