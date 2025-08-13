<template>
  <div class="flex flex-col h-screen">
    <!-- Top menu -->
    <top-menu />

    <main class="flex flex-row flex-1 overflow-hidden">
      <!-- side menu -->
      <side-menu />
      <!-- RouterView -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/componentes/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
