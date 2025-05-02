<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar :isMenuOpen="isMenuOpen" @toggle="toggleMenu" />

    <div :class="[
      'flex flex-col flex-1 transition-all duration-300',
      isMenuOpen ? 'sm:ml-64' : ''
    ]">
      <Header />
      <main class="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '../components/layout/Sidebar.vue'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'

const isMenuOpen = ref(false)
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
