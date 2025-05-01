<template>
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Bienvenue !</p>
      <div class="bg-blue-200 text-black p-4 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300">
        Test de breakpoints Tailwind
      </div>
      <div class="p-4 bg-red-500 text-white">
        Tailwind fonctionne 🎉
      </div>
      <div class="p-4">
        <div class="bg-blue-200 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-pink-400 2xl:bg-purple-500 text-black p-4">
          Test responsive
        </div>
        <div class="text-xs mt-2">
          Taille de l’écran actuelle : <span class="block sm:inline">≥640px</span>
          <span class="hidden sm:inline"> | sm</span>
          <span class="hidden md:inline"> | md</span>
          <span class="hidden lg:inline"> | lg</span>
          <span class="hidden xl:inline"> | xl</span>
          <span class="hidden 2xl:inline"> | 2xl</span>
        </div>
      </div>

    </div>
  </template>
  