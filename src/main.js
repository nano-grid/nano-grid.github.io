import { createApp } from 'vue'
import appView from "./app.vue";
import router from "./modules/router";
import store from "./modules/store";
import "./stylesheets/application.scss";

import 'nano-grid/components';
import 'nano-grid-extended/components';

import NanoBtn from '@/components/btn.vue';

const app = createApp(appView);

app.component("btn", NanoBtn);

app.use(store).use(router).mount('#app');