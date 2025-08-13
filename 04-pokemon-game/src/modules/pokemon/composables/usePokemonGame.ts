import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]); // se usa para almacenar los pokemons obtenidos de la API
  const pokemonOptions = ref<Pokemon[]>([]);

  const aserts = ref(0);
  const failets = ref(0);
  const accion = (tipe: boolean) => {
    if (tipe) aserts.value++;
    else failets.value++;
  };

  // la diferencia de computed y ref es que computed es una propiedad computada que se actualiza cuando cambia el 
  // valor de sus dependencias
  // ref es una propiedad reactiva que se puede usar para almacenar un valor primitivo o o un objeto
  const pokemonRandom = computed(() => {
    // const indice = Math.floor(Math.random() * (pokemonOptions.value.length - 1 - 0 + 1) + 0);
    const indice = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[indice];
  });

  // Propiedad computada que devuelve la cargada de los pokemons
  const isLoading = computed(() => pokemons.value.length === 0); // se usa para mostrar un loading mientras se cargan los pokemons

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=10');
    console.log('Pokemons:', response.data.results);

    const pokemonArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2] ?? 0; // se obtiene el id del pokemon de la url
      return {
        name: pokemon.name,
        id: +id, // se obtiene el id del pokemon de la url
      };
    });

    return pokemonArray.sort(() => Math.random() - 0.5); // se ordena aleatoriamente el array de pokemons
  };

  // https://www.npmjs.com/package/canvas-confetti
  // ejecutar: npm i canvas-confetti
  // luego: npm i --save-dev @types/canvas-confetti

  const getGroupViewPokemon = (howMeny: number = 4) => {
    // console.log('consulta API: ', pokemons.value);
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMeny); // se usa para obtener los primeros 4 pokemons del array de pokemons
    pokemons.value = pokemons.value.slice(howMeny);

    // aqui quiero que que se ejecute de nuevo el onMounted ?
  };

  const nextRound = async () => {
    try {
      pokemonOptions.value = [];
      pokemons.value = []; // se usa para reiniciar el juego
      gameStatus.value = GameStatus.Playing; // se usa para reiniciar el juego

      pokemons.value = await getPokemons(); // se usa para obtener los pokemons de la API
      getGroupViewPokemon(4);
    } catch (error) {
      console.error('Error en nextRound:', error);
    }
  };

  const checkAnswer = (id: number) => {
    const hasWon = pokemonRandom.value.id === id; // se usa para comprobar si el pokemon seleccionado es el correcto
    if (hasWon) {
      gameStatus.value = GameStatus.Won; // se usa para cambiar el estado del juego a ganado
      confetti({
        particleCount: 300,
        spread: 70,
        origin: { y: 0.6 }, // 0 hasta 1
        // colors: ['#bb0000', '#ffffff'],
      });
      accion(true); // se usa para aumentar el contador de aciertos
      console.log('Aciertos:', aserts.value);
      return;
    } else {
      gameStatus.value = GameStatus.Lost; // se usa para cambiar el estado del juego a perdido
      accion(false); // se usa para aumentar el contador de fallos
      console.log('Aciertos:', failets.value);
    }
  };

  // se usa cuando el DOM ya ha sido montado
  // y se puede acceder a los elementos del DOM
  onMounted(async () => {
    // await new Promise((r) => setTimeout(r, 1000)); // se usa para simular un loading de 2 segundos
    pokemons.value = await getPokemons();
    getGroupViewPokemon();
    // console.log('Pokemons:', pokemons.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    pokemonRandom,
    failets,
    aserts,

    // methods
    accion,
    nextRound,
    checkAnswer,
  };
};
