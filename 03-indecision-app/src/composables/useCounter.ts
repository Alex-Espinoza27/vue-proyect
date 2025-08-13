import { computed, ref } from 'vue';

// const counter = ref(10);

export const useCounter = (inictialValue: number = 15) => {
  const counter = ref(inictialValue);
  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    //Read-only
    squareCounter,
  };
};
