<template>

  <!-- <div class="flex justify-center items-center space-x-2 mb-4" v-show="!isNewDateStamp"> 
    <span class="capitalize">{{ timestamp.toDateString() }}</span>
  </div> -->
  <!-- Example Message -->
  <div v-if="itsMine" class="flex justify-end flex-col items-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
    <div class="text-gray-500 text-xs">{{ timestamp.toLocaleString() }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
      <!-- fecha de envio -->
      <span class="text-gray-500 text-xs">{{ timestamp.toLocaleString() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
  timestamp: Date;
}

const isNewDateStamp = false;

defineProps<Props>();
</script>
