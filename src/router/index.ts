import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
import Layout from '../components/Layout.vue';
import { Roles, type UserRole } from '../constants/roles';
import ClientListView from '../views/ClientListView.vue';
import ForbiddenView from '../views/ForbiddenView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import MutationsView from '../views/MutationsView.vue';
import UserManagementView from '../views/UserManagementView.vue';

const routes = [
  { 
    path: '/', 
    redirect: '/login'
 },
  { 
    path: '/login', 
    name: 'Login', 
    component: LoginView
 },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: ForbiddenView
  },
  
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path: 'dashboard', 
        name: 'Dashboard', 
        component: DashboardView,
        meta: { roles: [Roles.ADMIN, Roles.HELPDESK, Roles.CLIENT] }
        },
        {
            path: 'documents',
            name: 'Documents',
            component: DocumentsView,
            meta: { roles: [Roles.CLIENT] }
          },
          {
            path: 'mutations',
            name: 'Mutations',
            component: MutationsView,
            meta: { roles: [Roles.HELPDESK] }
          },
          {
            path: 'admin/users',
            name: 'UserManagement',
            component: UserManagementView,
            meta: { roles: [Roles.ADMIN] }
          },
          { path: '/clients', 
            name: 'Clients', 
            component: ClientListView,
            meta: { roles: [Roles.ADMIN, Roles.HELPDESK] } 
          }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
  
    if (to.path === '/login') return next();
  
    if (!auth.isAuthenticated) return next('/login');
  
    const allowedRoles = to.meta.roles as UserRole[] | undefined;
  
    if (allowedRoles && !allowedRoles.includes(auth.role!)) {
        return next('/forbidden');
      }      
  
    next();
  });

export default router;
