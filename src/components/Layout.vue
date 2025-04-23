<template>
    <div class="flex h-screen">
        <aside :class="['transition-all duration-300 bg-gray-100 p-4', isMenuOpen ? 'w-64' : 'w-16']">
        <button @click="toggleMenu" class="mb-4 text-blue-600">
            {{ isMenuOpen ? '«' : '»' }}
        </button>
        <div v-if="isMenuOpen">
            <h2 class="text-xl font-bold mb-4">Menu</h2>
            <ul class="space-y-2 text-left">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li v-if="role === Roles.ADMIN || role === Roles.HELPDESK"><router-link to="/clients">Liste des clients</router-link></li>
            <li v-if="role === Roles.CLIENT"><router-link to="/documents">Mes documents</router-link></li>
            <li v-if="role === Roles.HELPDESK"><router-link to="/mutations">Mutations</router-link></li>
            <li v-if="role === Roles.ADMIN"><router-link to="/admin/users">Gestion des utilisateurs</router-link></li>
            </ul>
            <button @click="logout" class="mt-4 text-red-500">Déconnexion</button>
        </div>
        </aside>
      <main class="flex-1 p-10 overflow-y-auto bg-white">
            <router-view />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  import { Roles } from '../constants/roles';
  import { ref } from 'vue';

  const isMenuOpen = ref(true);
  const auth = useAuthStore();
  const router = useRouter();
  const role = auth.role;
  
  function logout() {
    auth.logout();
    router.push('/login');
  }
    
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  </script>
  