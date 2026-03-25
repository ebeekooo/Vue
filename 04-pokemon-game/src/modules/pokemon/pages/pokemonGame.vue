<template>
  <section
    v-if="false"
    class="flex flex-col items-center justify-center items-screen w-screen h-screen"
  >
    <h1>Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon...</h3>
  </section>

  <section class="flex flex-col items-center justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quién es este pokemon?</h1>
    <!-- pokemon image -->
    <PokemonPicture />
    <!-- options -->

    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/pokemonPicture.vue';
import PokemonOptions from '../components/pokemonOptions.vue';
import { usePokemon, usePokemonGame } from '../composables/usePokemonGame';
import { gameStatus } from '../interfaces/game-status.enum';
const { gameStatus } = usePokemonGame();
</script>
