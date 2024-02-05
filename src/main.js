import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "./style.css";
import "./assets/index.scss";
import { router } from "./router";
import "./assets/global.css";
import "ant-design-vue/dist/reset.css";
const app = createApp(App).use(router);
const pinia = createPinia();
app.use(pinia);

app.use(Antd).mount("#app");
