
import { createApp } from 'vue';
import appView from "./app.vue";
import router from "./modules/router";
import store from "./modules/store";
import VueKonva from "vue-konva";
import NanoBtn from '@/components/btn.vue';
import 'nano-grid/components';
import 'nano-grid-extended/components';
import "./stylesheets/application.scss";

const app = createApp(appView);

app.use(VueKonva);
app.component("btn", NanoBtn);
app.use(store).use(router).mount('#app');