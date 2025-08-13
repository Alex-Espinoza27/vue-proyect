<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      type="button"
      @click="onLogin"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Login
    </button>
  </form>
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogin = () => {
  // localStorage es un objeto global que permite almacenar datos en el navegador del usuario.
  //  la inforcion es persistente en localStorage y se mantiene incluso después de cerrar el navegador.

  // sesionStorage es similar a localStorage, pero los datos se eliminan cuando se cierra la pestaña o el navegador.
  //  la inforcion es temporal en sesionStorage y se utiliza para almacenar datos que solo son necesarios durante una sesión de navegación.
  localStorage.setItem('userId', 'ABC-132'); // Ejemplo de almacenamiento en localStorage
  const lastPath = localStorage.getItem('lastPath') ?? '/'; // Obtiene la última ruta visitada o establece una ruta predeterminada

  console.log('home');

  router.replace(lastPath); // Redirige al usuario a la última ruta visitada o a la ruta predeterminada
};
</script>
