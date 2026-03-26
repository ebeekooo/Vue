<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <a>Home</a>
  </nav>
  <main class="bg-slate-100">
    <RouterView />
  </main>
</template>
