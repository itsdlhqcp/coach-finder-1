import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Just domain
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      // Adding this makes it so dynamic segment of path is passed as a prop of that name (in this case, id) into that component
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } // /coaches/c1/contact
      ]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    // Messages received through coach contact form
    { path: '/requests', component: RequestsReceived },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

// Navigation guards
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
