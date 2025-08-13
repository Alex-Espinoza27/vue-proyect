<template>
  <div>
    <section>
      <h1 class="text-3xl font-bold text-center">
        Pokemon <small class="text-blue-500">#{{ id }}</small>
      </h1>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
        alt="pokemon"
        class="w-[200px] h-[200px] mt-5"
      />
    </section>
    <section class="mt-5">
      <RouterLink
        class="text-center text-white bg-blue-500 rounded m-10 p-2 hover:bg-blue-700"
        :to="{ name: 'pokemon', params: { id: +id + 1 } }"
      >
        Siguiente Pokemon
      </RouterLink>
    </section>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();
console.log({ id: props.id });
</script>
