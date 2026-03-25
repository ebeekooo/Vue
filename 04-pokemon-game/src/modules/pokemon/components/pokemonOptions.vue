<template>
  <section class="mt-10">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@reference 'tailwindcss';

li {
  @apply bg-white shadow-md rounded-lg p-3 cursor-pointer w-40 text-center transition-all duration-300 ease-in-out hover:bg-gray-100;
}
</style>
