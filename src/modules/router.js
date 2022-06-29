import BuilderWorkareaView from '../views/builder-workarea.vue';
import ClassesWorkareaView from '../views/classes-workarea.vue';
import DictionaryWorkareaView from '../views/dictionary-workarea.vue';
import DocumentationWorkareaView from '../views/documentation-workarea.vue';
import TestsWorkareaView from '../views/tests-workarea.vue';
import AboutWorkareaView from '../views/about-workarea.vue';
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
    },
  },
  {
    path: '/sizes',
    name: 'sizes',
    components: {
      workarea: ClassesWorkareaView,
    },
  },
  {
    path: '/documentation',
    name: 'documentation',
    components: {
      workarea: DictionaryWorkareaView,
    },
  },
  {
    path: '/installation',
    name: 'installation',
    components: {
      workarea: DocumentationWorkareaView,
    },
  },
  {
    path: '/tests',
    name: 'tests',
    components: {
      workarea: TestsWorkareaView,
    },
  },
  {
    path: '/about',
    name: 'about',
    components: {
      workarea: AboutWorkareaView,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
