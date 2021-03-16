import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Just domain
    { path: '/', redirect: '/coaches' }
    { path: '/coaches', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [
        { path: 'contact', component: null } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: null },
    // Messages received through coach contact form
    { path: '/requests', component: null },
    { path: '/:notFound(.*)', component: null }
  ]
});

export default router;
