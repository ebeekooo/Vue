import { computed, onMounted, ref } from 'vue';
import { gameStatus } from '../interfaces/game-status.enum';
import { pokemonApi } from '../api/pokemonApi';
import type { PokemonListResponse, Pokemon } from '../interfaces';
export const usePokemonGame = () => {
  const GameStatus = ref<gameStatus>(gameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
  });

  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });
    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    GameStatus.value = gameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value?.id === id;

    if (hasWon) {
      GameStatus.value = gameStatus.Won;
    }
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    pokemons.value = await getPokemons();
    getNextOptions();
  });

  return {
    GameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,

    getNextOptions,
  };
};
