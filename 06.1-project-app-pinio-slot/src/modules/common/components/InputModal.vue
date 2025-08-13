<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog  class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title ?? 'Nuevo Proyecto' }}</h3>
      <p class="py-2">{{ subtitle ?? 'Modal para el registro de proyectos' }}</p>

      <div class="modal-action flex flex-col">
        <!-- prevent para que no refresque la pagina -->
        <form method="dialog" @submit.prevent="sumitValue">
          <input
            ref="inputRef"
            v-model="inputValue"
            type="text"
            :placeholder="placeholder ?? 'Insert name project...'"
            class="input input-bordered input-primary w-full flex-1"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-4 mr-4">
            <button type="button" @click="$emit('close')" class="btn">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div v-if="open" class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-60 w-screen h-screen"></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  placeholder?: string;
  title?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
    close: [void];
    value: [text: string];
}>();
const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

// PORQUE NO FUNCIONA EL FOCUS ?

watch(props, ({open}) =>{
  if(open) {
    inputRef.value?.focus();
  }
});

const sumitValue = ()=>{
    console.log({value:inputValue.value });

    if(!inputValue.value.trim()) {
        inputRef.value?.focus();
        return;
    }
    emits('value', inputValue.value.trim());
    emits('close');

    inputValue.value = ''; // Reset input value
}

</script>

abc*2023GitHub


<!-- NO FUNCI -->