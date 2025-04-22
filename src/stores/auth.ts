import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { UserRole } from '../constants/roles';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const role = ref<UserRole | null>(null);

  function login(selectedRole: UserRole) {
    isAuthenticated.value = true;
    role.value = selectedRole;
  }

  function logout() {
    isAuthenticated.value = false;
    role.value = null;
  }

  return { isAuthenticated, role, login, logout };
    }, {
    persist: true
  });
