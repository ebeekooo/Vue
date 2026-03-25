import { onMounted, ref } from 'vue';
import { gameStatus } from '../interfaces/game-status.enum';
import { pokemonApi } from '../api/pokemonApi';
import type { PokemonListResponse } from '../interfaces';

export const usePokemonGame = () => {
  const GameStatus = ref<gameStatus>(gameStatus.Playing);
  const getPokemons = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    console.log(response.data);
  };

  onMounted(() => {
    getPokemons();
  });

  return {
    GameStatus,
  };
};
