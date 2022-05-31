import { createApp } from 'vue';
const app = createApp({});

import NanoBtn from '@/components/btn.vue';
import Gear from '@/components-web/gear';
import Star from '@/components-web/star';

app.component("btn", NanoBtn);

window.customElements.define('web-gear', Gear);
window.customElements.define('web-star', Star);