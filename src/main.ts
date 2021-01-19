import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import "./index.css";
import router from "./router";

createApp(App).use(router).use(createHead()).mount("#app");
