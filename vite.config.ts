import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',       // 👈 nécessaire pour exposer à l'extérieur du conteneur
    port: 8080,
    watch: {
      usePolling: true     // 👈 pour que le hot reload fonctionne depuis un volume monté
    }
  }
})
