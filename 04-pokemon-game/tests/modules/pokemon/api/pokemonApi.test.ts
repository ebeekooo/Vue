import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';
import { test, describe, expect } from 'vitest';

describe('pokemonApi', () => {
  test('should be configured as expected', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

    expect(pokemonApi.defaults.baseURL).toBe(baseUrl);
  });
});
