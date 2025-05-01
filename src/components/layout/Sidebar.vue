<template>
    <aside
      :class="[
        'transition-all duration-300 text-white bg-[#04A4D5] h-screen flex flex-col',
        isMenuOpen ? 'w-64 px-4' : 'w-16 px-0'
      ]"
    >
      <div class="mt-4 flex justify-center">
        <button @click="toggleMenu" class="text-white text-lg p-2 border border-white rounded">
          {{ isMenuOpen ? '«' : '»' }}
        </button>
      </div>
  
      <nav class="mt-6 flex-1">
        <h2 v-if="isMenuOpen" class="text-xl font-bold mb-6 px-4" style="padding: 10px;">Menu</h2>
        <ul class="list-none" style="padding: 10px;">
          <li>
            <router-link
              to="/dashboard"
              class="flex items-center gap-2 hover:text-white transition-all"
              :class="isMenuOpen ? 'justify-start pl-4' : 'justify-center'"
            >
              <Home class="w-5 h-5" />
              <span v-if="isMenuOpen">Dashboard</span>
            </router-link>
          </li>
          <li v-if="role === Roles.ADMIN || role === Roles.HELPDESK">
            <router-link
              to="/clients"
              class="flex items-center gap-2 hover:text-white transition-all"
              :class="isMenuOpen ? 'justify-start pl-4' : 'justify-center'"
            >
              <Users class="w-5 h-5" />
              <span v-if="isMenuOpen">Liste des clients</span>
            </router-link>
          </li>
          <li v-if="role === Roles.CLIENT">
            <router-link
              to="/documents"
              class="flex items-center gap-2 hover:text-white transition-all"
              :class="isMenuOpen ? 'justify-start pl-4' : 'justify-center'"
            >
              <FileText class="w-5 h-5" />
              <span v-if="isMenuOpen">Mes documents</span>
            </router-link>
          </li>
          <li v-if="role === Roles.HELPDESK">
            <router-link
              to="/mutations"
              class="flex items-center gap-2 hover:text-white transition-all"
              :class="isMenuOpen ? 'justify-start pl-4' : 'justify-center'"
            >
              <Settings class="w-5 h-5" />
              <span v-if="isMenuOpen">Mutations</span>
            </router-link>
          </li>
          <li v-if="role === Roles.ADMIN">
            <router-link
              to="/admin/users"
              class="flex items-center gap-2 hover:text-white transition-all"
              :class="isMenuOpen ? 'justify-start pl-4' : 'justify-center'"
            >
              <Users class="w-5 h-5" />
              <span v-if="isMenuOpen">Utilisateurs</span>
            </router-link>
          </li>
        </ul>
      </nav>
  
      <div class="mb-4 border-t border-white pt-4 px-4">
        <button
          @click="logout"
          class="flex items-center gap-2 text-red-100 w-full hover:text-white"
          :class="isMenuOpen ? 'justify-start' : 'justify-center'"
        >
          <LogOut class="w-5 h-5" />
          <span v-if="isMenuOpen">Déconnexion</span>
        </button>
      </div>
    </aside>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../../stores/auth'
  import { Roles } from '../../constants/roles'
  import { ref } from 'vue'
  import { Home, Users, FileText, Settings, LogOut } from 'lucide-vue-next'
  
  const isMenuOpen = ref(true)
  const auth = useAuthStore()
  const router = useRouter()
  const role = auth.role
  
  function logout() {
    auth.logout()
    router.push('/login')
  }
  
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }
  </script>
  