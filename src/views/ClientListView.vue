<script setup lang="ts">
import { onMounted } from 'vue'
import { useClientStore } from '../stores/client'

const clientStore = useClientStore()

onMounted(() => {
  clientStore.fetchClients()
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Liste des clients</h1>

    <div v-if="clientStore.isLoading">Chargement...</div>

    <table v-else class="w-full border">
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
        <tr v-for="client in clientStore.clients" :key="client.id" class="hover:bg-gray-50">
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
