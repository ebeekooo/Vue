<template>
  <section
    v-if="isLoading || !randomPokemon"
    class="flex flex-col items-center justify-center items-screen w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quién es este pokemon?</h1>
    <div class="h-20">
      <button
        v-if="GameStatus !== gameStatus.Playing"
        @click="getNextRound(4)"
        data-test-id="btn-new-game"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 transition-all"
      >
        ¿Jugar de nuevo?
      </button>
    </div>
    <!-- pokemon image -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="GameStatus !== gameStatus.Playing"
    />
    <!-- options -->

    <PokemonOptions
      :options="pokemonsOptions"
      :block-selection="GameStatus !== gameStatus.Playing"
      :correctAnswer="randomPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/pokemonPicture.vue';
import PokemonOptions from '../components/pokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { gameStatus } from '../interfaces/game-status.enum';

const { randomPokemon, isLoading, GameStatus, pokemonsOptions, checkAnswer, getNextRound } =
  usePokemonGame();
</script>
