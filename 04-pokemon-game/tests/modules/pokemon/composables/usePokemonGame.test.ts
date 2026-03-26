import { flushPromises } from '@vue/test-utils';
import MockAdapter from 'axios-mock-adapter';
import confetti from 'canvas-confetti';

import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { withSetup } from '../../../utils/with-setup';
import { pokemonListFake } from '../../../data/fake-pokemons';

import { gameStatus } from '@/modules/pokemon/interfaces/game-status.enum';
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';

const mockPokemonApi = new MockAdapter(pokemonApi);

mockPokemonApi.onGet('/?limit=151').reply(200, {
  results: pokemonListFake,
});

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('usePokemonGame', async () => {
  test('should initialize with the correct default values', async () => {
    const [results, app] = withSetup(usePokemonGame);

    expect(results.GameStatus.value).toBe(gameStatus.Playing);
    expect(results.isLoading.value).toBe(true);
    expect(results.pokemonOptions.value).toEqual([]);
    expect(results.randomPokemon.value).toBe(undefined);

    await flushPromises();

    expect(results.isLoading.value).toBe(false);
    expect(results.pokemonOptions.value.length).toBe(4);
    expect(results.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });

  test('should correctly handle getNextRound', async () => {
    const [results] = withSetup(usePokemonGame);
    await flushPromises();

    results.GameStatus.value = gameStatus.Won;

    // Estímulo
    results.getNextRound(5);

    expect(results.GameStatus.value).toBe(gameStatus.Playing);
    expect(results.pokemonOptions.value).toHaveLength(5);
  });

  test('should correctly handle getNextRound and return different pokemons', async () => {
    const [results] = withSetup(usePokemonGame);
    await flushPromises();

    const firstOptions = [...results.pokemonOptions.value].map((p) => p.name);

    results.getNextRound(); // 4

    const secondOptions = [...results.pokemonOptions.value];

    secondOptions.forEach((pokemon) => {
      expect(firstOptions).not.toContain(pokemon.name);
    });
  });

  test('should correctly handle a incorrect answer', async () => {
    const [results] = withSetup(usePokemonGame);
    await flushPromises();

    const { checkAnswer, gameStatus } = results;

    expect(GameStatus.value).toBe(gameStatus.Playing);

    checkAnswer(100000000); // pokemon id no existe.

    expect(GameStatus.value).toBe(gameStatus.Lost);
  });

  test('should correctly handle a correct answer', async () => {
    const [results] = withSetup(usePokemonGame);
    await flushPromises();

    const { checkAnswer, gameStatus, randomPokemon } = results;

    expect(GameStatus.value).toBe(gameStatus.Playing);

    checkAnswer(randomPokemon.value.id); // pokemon id no existe.

    expect(confetti).toHaveBeenCalled();
    expect(confetti).toHaveBeenCalledWith({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.6 },
    });
    expect(GameStatus.value).toBe(gameStatus.Won);
  });
});
