<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Liste des clients</h1>
      <table class="w-full border">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2 border">ID</th>
            <th class="p-2 border">Nom</th>
            <th class="p-2 border">Prénom</th>
            <th class="p-2 border">Email</th>
            <th class="p-2 border">Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ client.id }}</td>
            <td class="p-2 border">{{ client.nom }}</td>
            <td class="p-2 border">{{ client.prenom }}</td>
            <td class="p-2 border">{{ client.email }}</td>
            <td class="p-2 border">{{ client.statut }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const clients = ref([]);
  
  onMounted(async () => {
    const res = await fetch('/src/data/clients.json');
    clients.value = await res.json();
  });
  </script>
  