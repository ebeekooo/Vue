<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu />

    <main class="flex flex-row">
      <!-- Side Menu -->
      <side-menu />

      <!-- RouterView -->
      <router-view />
    </main>
  </div>
</template>
