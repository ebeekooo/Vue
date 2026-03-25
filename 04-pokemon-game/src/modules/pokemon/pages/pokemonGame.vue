<template>
  <section
    v-if="isLoading || !randomPokemon"
    class="flex flex-col items-center justify-center items-screen w-screen h-screen"
  >
    <h1>Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon...</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quién es este pokemon?</h1>
    <h3>{{ randomPokemon }}</h3>
    <!-- pokemon image -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="GameStatus !== gameStatus.Playing"
    />
    <!-- options -->

    <PokemonOptions :options="pokemonsOptions" />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/pokemonPicture.vue';
import PokemonOptions from '../components/pokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { gameStatus } from '../interfaces/game-status.enum';

const { randomPokemon, isLoading, GameStatus, pokemonsOptions } = usePokemonGame();
</script>
