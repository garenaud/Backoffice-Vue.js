import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 👇 Navigation guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.path !== '/login' && !auth.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
