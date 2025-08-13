<template>
    <!-- Add Project Button -->
    <button @click="$emit('click')" :class="['btn btn-circle btn-primary fixed', props.position]">
        <!-- Obtiene el slot de la instancia creada en el componente padre -->
        <slot />    
    </button>

</template>


<script setup lang="ts">
import { defineProps } from 'vue';

interface Props{
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

// valor por defecto para la posición del botón
const props = withDefaults(defineProps<Props>(), {
    position: 'bottom-right'
})

// Emits para manejar el evento de click al componente padre
defineEmits(['click']);

</script>

<style scoped>
@reference "tailwindcss";

.top-right{
    @apply top-10 right-10;
}
.top-left{
    @apply top-10 left-10;
}
.bottom-left{
    @apply bottom-10 left-10;
}
.bottom-right{
    @apply bottom-10 right-10;
}
</style>