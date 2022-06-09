import BuilderWorkareaView from '../views/builder-workarea.vue';
import BuilderPanelView from '../views/builder-panel.vue';
import ClassesWorkareaView from '../views/classes-workarea.vue';
import GalleryWorkareaView from '../views/gallery-workarea.vue';
import TestsWorkareaView from '../views/tests-workarea.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/builder',
  },
  {
    path: '/builder',
    name: 'builder',
    components: {
      workarea: BuilderWorkareaView,
      panel: BuilderPanelView,
    },
  },
  {
    path: '/classes',
    name: 'classes',
    components: {
      workarea: ClassesWorkareaView,
    },
  },
  {
    path: '/gallery',
    name: 'gallery',
    components: {
      workarea: GalleryWorkareaView,
    },
  },
  {
    path: '/tests',
    name: 'tests',
    components: {
      workarea: TestsWorkareaView,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
