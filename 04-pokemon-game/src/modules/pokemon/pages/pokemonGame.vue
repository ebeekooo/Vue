<template>
  <section
    v-if="isLoading"
    class="flex flex-col items-center justify-center items-screen w-screen h-screen"
  >
    <h1>Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemon...</h3>
  </section>

  <section v-else class="flex flex-col items-center justify-center items-center w-screen h-screen">
    <h1 class="m-2">¿Quién es este pokemon?</h1>
    <h3>{{ randomPokemon }}</h3>
    <!-- pokemon image -->
    <PokemonPicture />
    <!-- options -->

    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '../components/pokemonPicture.vue';
import PokemonOptions from '../components/pokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { isLoading, randomPokemon } = usePokemonGame();
</script>
