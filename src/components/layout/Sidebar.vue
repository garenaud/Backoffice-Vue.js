<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside
        :class="[
          'fixed sm:static top-0 left-0 h-screen bg-[#04A4D5] text-white z-40 transition-all duration-300 flex flex-col',
          isMenuOpen ? 'w-full sm:w-64 px-4' : 'w-16 px-0'
        ]"
      >
        <!-- Toggle button -->
        <div class="mt-4 flex justify-center sm:justify-end px-2">
          <button @click="toggleMenu" class="text-white text-lg p-2 border border-white rounded">
            {{ isMenuOpen ? '«' : '»' }}
          </button>
        </div>
  
        <!-- Menu items -->
        <nav class="mt-6 flex-1 overflow-y-auto">
          <h2 v-if="isMenuOpen" class="text-xl font-bold mb-6 px-4">Menu</h2>
          <ul class="list-none p-2 space-y-2">
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
  
        <!-- Logout -->
        <div class="border-t border-white px-4 pt-4">
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
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../../stores/auth'
  import { Roles } from '../../constants/roles'
  import { ref } from 'vue'
  import { Home, Users, FileText, Settings, LogOut } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
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
  