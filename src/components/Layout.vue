<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar />

    <div class="flex flex-col flex-1">
      <Header />

      <main class="flex-1 overflow-y-auto bg-gray-50 p-6">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/layout/Sidebar.vue'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
</script>
