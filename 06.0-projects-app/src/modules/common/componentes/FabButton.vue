<template>
  <button :class="['btn btn-circle btn-secondary absolute', props.position]">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});
</script>

<style scoped>
@import 'tailwindcss';
@plugin "daisyui";

.top-left {
  @apply top-10 left-10;
}
.top-right {
  @apply top-10 right-10;
}
.bottom-left {
  @apply bottom-10 left-10;
}
.bottom-right {
  @apply bottom-10 right-10;
}
</style>
