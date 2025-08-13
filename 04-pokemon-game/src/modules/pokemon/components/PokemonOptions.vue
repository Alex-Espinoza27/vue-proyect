<template>
  <section class="flex flex-col mt-5">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOptions', id)"
      :class="[
        'capaitalize disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>
<!-- incorrect: id !== correctAnswer && blockSelection, -->

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
  selectedOptions: [id: number];
}>();
</script>

<style scoped>
@reference "tailwindcss";
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-200;
}

.correct {
  @apply bg-green-500 text-white;
}
.correct:hover {
  @apply bg-green-500;
}

.incorrect {
  @apply bg-red-50 opacity-70;
}
</style>
