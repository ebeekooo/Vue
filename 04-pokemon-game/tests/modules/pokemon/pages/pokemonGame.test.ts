import PokemonGame from '@/modules/pokemon/pages/pokemonGame.vue';
import type { Mock } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, computed } from 'vue';
import { describe, test, expect, vi } from 'vitest';

import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { gameStatus } from '@/modules/pokemon/interfaces/game-status.enum';

vi.mock('@/modules/pokemon/composables/usePokemonGame', () => ({
  usePokemonGame: vi.fn(),
}));

const pokemonsOptions = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
  { name: 'charmander', id: 4 },
];

describe('<PokemonGame />', () => {
  test('should initialize with default values', async () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: computed(() => undefined),
      isLoading: computed(() => true),
      GameStatus: ref(gameStatus.Playing),
      pokemonsOptions: ref([]),
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    expect(wrapper.get('h1').text()).toBe('Espere por favor');
    expect(wrapper.get('h1').classes()).toContain('text-3xl');

    expect(wrapper.get('h3').text()).toBe('Cargando Pokémons');
    expect(wrapper.get('h3').classes()).toContain('animate-pulse');
  });

  test('should render <PokemonPicture /> and <PokemonOptions />', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: computed(() => pokemonsOptions[0]),
      isLoading: computed(() => false),
      GameStatus: ref(gameStatus.Playing),
      pokemonsOptions: ref(pokemonsOptions),
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`;
    const pokemons = pokemonsOptions.map((p) => p.name);

    expect(wrapper.find('img').attributes('src')).toBe(imageUrl);

    // ✅ Encuentra todos los botones (sin contar el del header)
    const buttons = wrapper.findAll('button:not([data-test-id="btn-new-game"])');
    expect(buttons).toHaveLength(4);

    buttons.forEach((button) => {
      expect(pokemons).toContain(button.text());
    });
  });

  test('should render button for a new game', () => {
    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: computed(() => pokemonsOptions[0]),
      isLoading: computed(() => false),
      GameStatus: ref(gameStatus.Won),
      pokemonsOptions: ref(pokemonsOptions),
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
    });

    const wrapper = mount(PokemonGame);

    const button = wrapper.find('[data-test-id="btn-new-game"]');

    expect(button.text()).toBe('¿Jugar de nuevo?');
  });

  test('should call the getNextRound function when the button is clicked', async () => {
    const spyNextRoundFn = vi.fn();

    (usePokemonGame as Mock).mockReturnValue({
      randomPokemon: computed(() => pokemonsOptions[0]),
      isLoading: computed(() => false),
      GameStatus: ref(gameStatus.Won),
      pokemonsOptions: ref(pokemonsOptions),
      checkAnswer: vi.fn(),
      getNextRound: spyNextRoundFn,
    });

    const wrapper = mount(PokemonGame);
    const button = wrapper.find('[data-test-id="btn-new-game"]');

    await button.trigger('click');

    expect(spyNextRoundFn).toHaveBeenCalled();
    expect(spyNextRoundFn).toHaveBeenCalledWith(4);
  });
});
