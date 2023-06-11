import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/global.css";

import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";

const app = createApp(App);

app.use(router);

app.mount("#app");
