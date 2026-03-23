<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <hr />

  <CounterApp :value="5" />
</template>

<script lang="ts" setup>
import CounterApp from './components/counterApp.vue';
import CounterAppScript from './components/counterAppScript.vue';
</script>
