import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import form from "./stores/form";

const store = createStore({
  modules: {
    form,
  },
});

createApp(App).use(store).use(router).mount("#app");
