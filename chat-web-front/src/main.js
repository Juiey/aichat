import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // Move import here
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
const app = createApp(App);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// apply persisted dark mode preference
try {
  const dm = localStorage.getItem("darkMode");
  if (dm === "1") document.documentElement.classList.add("dark");
} catch (e) {}

pinia.use(piniaPluginPersistedstate);
app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount("#app"); // Add semicolon here
// Remove duplicate createApp call below
