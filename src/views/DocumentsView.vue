<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Mes documents</h1>
      <table class="w-full border">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-2 border">Nom</th>
            <th class="p-2 border">Type</th>
            <th class="p-2 border">Date</th>
            <th class="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in documents" :key="doc.id" class="hover:bg-gray-50">
            <td class="p-2 border">{{ doc.nom }}</td>
            <td class="p-2 border">{{ doc.type }}</td>
            <td class="p-2 border">{{ formatDate(doc.date) }}</td>
            <td class="p-2 border">
              <a :href="doc.fichier" class="text-blue-600 hover:underline">Télécharger</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const documents = ref([]);
  
  onMounted(async () => {
    const res = await fetch('/src/data/documents.json');
    documents.value = await res.json();
  });
  
  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-CH');
  }
  </script>
  