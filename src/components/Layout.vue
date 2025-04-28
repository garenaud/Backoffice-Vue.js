<template>
    <div class="flex h-screen">
        <aside
        :class="[
            'transition-all duration-300 bg-[#04A4D5] text-white flex flex-col',
            isMenuOpen ? 'w-64 px-4' : 'w-14 px-0'
        ]"
        class="!pl-0 !ml-0"
        >
        <div class="mt-4 flex justify-center">
          <button @click="toggleMenu" class="text-white text-lg p-2 rounded border border-white">
            {{ isMenuOpen ? '«' : '»' }}
          </button>
        </div>
  
        <nav class="list-none flex-1 mt-6 space-y-10">
          <h2 v-if="isMenuOpen" class="list-none text-xl font-bold mb-6">Menu</h2>
          <!-- <ul class="list-none space-y-4"> -->
            <li>
              <router-link
                to="/dashboard"
                class="flex items-center gap-2 w-full hover:text-white mt-4"
                :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
              >
                <Home class="w-5 h-5" />
                <span v-if="isMenuOpen">Dashboard</span>
              </router-link>
            </li>
            <li v-if="role === Roles.ADMIN || role === Roles.HELPDESK">
              <router-link
                to="/clients"
                class="flex items-center gap-2 w-full hover:text-white"
                :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
              >
                <Users class="w-5 h-5" />
                <span v-if="isMenuOpen">Liste des clients</span>
              </router-link>
            </li>
            <li v-if="role === Roles.CLIENT">
              <router-link
                to="/documents"
                class="flex items-center gap-2 w-full hover:text-white"
                :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
              >
                <FileText class="w-5 h-5" />
                <span v-if="isMenuOpen">Mes documents</span>
              </router-link>
            </li>
            <li v-if="role === Roles.HELPDESK">
              <router-link
                to="/mutations"
                class="flex items-center gap-2 w-full hover:text-white"
                :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
              >
                <Settings class="w-5 h-5" />
                <span v-if="isMenuOpen">Mutations</span>
              </router-link>
            </li>
            <li v-if="role === Roles.ADMIN">
              <router-link
                to="/admin/users"
                class="flex items-center gap-2 w-full hover:text-white"
                :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
              >
                <Users class="w-5 h-5" />
                <span v-if="isMenuOpen">Gestion des utilisateurs</span>
              </router-link>
            </li>
          <!-- </ul> -->
        </nav>
  
        <div class="mb-4 border-t border-white pt-4">
          <button
            @click="logout"
            class="flex items-center gap-2 text-red-100 w-full hover:text-white"
            :class="isMenuOpen ? 'justify-start pl-2' : 'justify-center'"
          >
            <LogOut class="w-5 h-5" />
            <span v-if="isMenuOpen">Déconnexion</span>
          </button>
        </div>
      </aside>
  
      <main class="flex-1 bg-white overflow-y-auto">
        <div class="p-10">
          <router-view />
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/auth'
  import { Roles } from '../constants/roles'
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
  