<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :message="message.message"
        :itsMine="message.itsMine"
        :image="message.image"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { chatMessage } from '@/interfaces/chat-msg-interface';
import ChatBubble from './chatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: chatMessage[];
}
const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);
watch(messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
