import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});
app.mount("#app");
