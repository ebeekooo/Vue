<template>
  <section>
    <h3>Counter:{{ 10 }}</h3>
    <h3>Square:{{ squareC }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button v-on:click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value?: number;
}
const props = defineProps<Props>();

const counter = ref(props.value ?? 5);
const squareC = computed(() => counter.value * counter.value);
</script>
