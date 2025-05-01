<template>
    <header class="sticky top-0 z-30 w-full border-b border-gray-200 bg-white shadow-sm">
      <div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <button @click="$emit('toggleSidebar')" class="lg:hidden">
            <Menu class="h-6 w-6 text-gray-600" />
          </button>
          <h1 class="text-xl font-semibold text-gray-700">Tableau de bord</h1>
        </div>
        <div class="flex items-center gap-4">
          <button class="relative">
            <Bell class="h-5 w-5 text-gray-600" />
            <span class="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-700">Utilisateur</span>
            <img
              src="https://i.pravatar.cc/30"
              alt="Avatar"
              class="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { Menu, Bell } from 'lucide-vue-next'
  </script>
  