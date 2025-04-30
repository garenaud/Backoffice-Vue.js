import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Client } from '../types/client'

export const useClientStore = defineStore('clients', () => {
  const clients = ref<Client[]>([]) // 👈 typage explicite
  const isLoading = ref(false)

  async function fetchClients() {
    isLoading.value = true
    const res = await fetch('/src/data/clients.json')
    clients.value = await res.json()
    isLoading.value = false
  }

  return { clients, isLoading, fetchClients }
})
