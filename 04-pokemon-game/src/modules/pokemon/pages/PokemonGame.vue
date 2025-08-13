<template>
  <!-- Poner en loading cuando este en la consulta y este listo el pkemonrandom -->
  <section class="flex flex-col items-center justify-end m-5">
    <h2 class="text-start">CANTIDAD DE ASERCIONES: {{ aserts }}</h2>
    <h2 class="text-start">CANTIDAD DE FALLOS: {{ failets }}</h2>
  </section>

  <section
    v-if="isLoading || pokemonRandom.id === null"
    class="flex flex-col items-center justify-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere porfavor</h1>
    <h3 class="animate-pulse">Cargando pokemons</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center">
    <h1>¿Quien es este pokemon?</h1>
    <!-- <h3 class="capitalize">{{ gameStatus }}</h3> -->
    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="nextRound"
        class="bg-blue-500 text-white rounded-lg p-2 m-2 cursor-pointer w-40 text-center transition-all hover:bg-blue-400"
      >
        ¿Siguiente Ronda?
      </button>
    </div>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemonId="pokemonRandom.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="pokemonRandom.id"
      @selected-options="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  pokemonRandom,
  isLoading,
  gameStatus,
  pokemonOptions: options,
  aserts,
  failets,
  checkAnswer,
  nextRound,
} = usePokemonGame();

// const onSelectedOptions = (value: number) => {
//   console.log('Selected option:', value);
// };
</script>
