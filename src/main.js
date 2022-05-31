import { createApp } from 'vue'
import app from "./app.vue";
import router from "./modules/router";
import store from "./modules/store";
import "./stylesheets/application.scss";
import "./modules/commons";
// import "@/modules/tooltip";
import 'nano-grid/components';


createApp(app).use(store).use(router).mount('#app');