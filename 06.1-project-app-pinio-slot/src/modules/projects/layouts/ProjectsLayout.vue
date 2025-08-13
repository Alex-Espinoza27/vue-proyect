<template>
    <div class="flex flex-col">
        <top-menu/>
    </div>
    <!-- To menu -->
    

    <main class="flex flex-row">
        <!-- Side menu -->
        <side-menu />
        

        <!-- RouterView -->
        <router-view />

    </main>

</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue'
import SideMenu from '@/modules/projects/components/SideMenu.vue'

</script>