<template>
  <section>
    <h3>Counter:{{ 10 }}</h3>
    <h3>Square:{{ squareC }}</h3>

    <div>
      <button class="btn">+1</button>
      <button class="btn" v-on:click="counter--">-1</button>
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
<style scoped>
@reference "tailwindcss";
.btn {
  @apply p-5 bg-blue-300 rounded hover:bg-blue-900;
}
</style>
