<template>
    <div class="h-screen flex items-center justify-center bg-gray-50 ">
      <div class="p-8 max-w-md bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-4">Connexion</h1>
        <label class="block mb-4 text-center">Choisir un rôle :</label>
        <select v-model="selectedRole" class="mb-10 p-2 border mx-auto block rounded-full w-full text-center">
          <option value="admin">Admin</option>
          <option value="helpdesk">Helpdesk</option>
          <option value="client">Client</option>
        </select>
        <button
          @click="handleLogin"
          class="bg-blue-600 text-white px-4 py-2 rounded-full w-full"
        >
          Se connecter
        </button>
      </div>
    </div>
  </template>
  
  
  
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  
  const router = useRouter();
  const auth = useAuthStore();
  const selectedRole = ref<'admin' | 'helpdesk' | 'client'>('admin');
  
  function handleLogin() {
    auth.login(selectedRole.value);
    router.push('/dashboard');
  }
  </script>
  