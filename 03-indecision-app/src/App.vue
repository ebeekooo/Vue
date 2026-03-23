<template>
  <h1>Mi primera app</h1>
  <hr />

  <CounterApp :value="5" />
</template>

<script lang="ts" setup>
import CounterApp from './components/counterApp.vue';
import CounterAppScript from './components/counterAppScript.vue';
</script>
