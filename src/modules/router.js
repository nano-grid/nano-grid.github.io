import HomeWorkareaView from '../views/home-workarea.vue';
import HomePanelView from '../views/home-panel.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      workarea: HomeWorkareaView,
      panel: HomePanelView,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
