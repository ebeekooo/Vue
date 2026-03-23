<script setup lang="ts">
import ChatBubble from './chatBubble.vue';
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble
        :its-mine="false"
        :message="'no'"
        image="https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif"
      />
    </div>
  </div>
</template>
