import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const role = ref<'admin' | 'helpdesk' | 'client' | null>(null);

  function login(selectedRole: typeof role.value) {
    isAuthenticated.value = true;
    role.value = selectedRole;
  }

  function logout() {
    isAuthenticated.value = false;
    role.value = null;
  }

  return { isAuthenticated, role, login, logout };
});
