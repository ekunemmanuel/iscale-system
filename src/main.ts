import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import { fadeIn } from "./directives/fadeIn";

const app = createApp(App);

app.directive("fade-in", fadeIn);

app.mount("#app");
