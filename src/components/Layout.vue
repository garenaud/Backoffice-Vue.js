<template>
    <div class="flex h-screen">
      <aside class="w-64 bg-gray-100 p-4">
        <h2 class="text-xl font-bold mb-4">Menu</h2>
        <ul class="space-y-2">
          <li><router-link to="/dashboard">Dashboard</router-link></li>
  
          <li v-if="role === Roles.ADMIN || role === Roles.HELPDESK">
            <router-link to="/clients">Liste des clients</router-link>
          </li>
  
          <li v-if="role === Roles.CLIENT">
            <router-link to="/documents">Mes documents</router-link>
          </li>
  
          <li v-if="role === Roles.HELPDESK">
            <router-link to="/mutations">Mutations</router-link>
          </li>
  
          <li v-if="role === Roles.ADMIN">
            <router-link to="/admin/users">Gestion des utilisateurs</router-link>
          </li>
  
          <li>
            <button @click="logout" class="text-red-500">Déconnexion</button>
          </li>
        </ul>
      </aside>
      <main class="flex-1 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  import { Roles } from '../constants/roles';
  
  const auth = useAuthStore();
  const router = useRouter();
  const role = auth.role;
  
  function logout() {
    auth.logout();
    router.push('/login');
  }
  </script>
  