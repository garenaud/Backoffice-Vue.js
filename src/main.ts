import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // 👈 importe le router
import './style.css';

const app = createApp(App);
app.use(createPinia());
app.use(router); // 👈 ajoute le router
app.mount('#app');
