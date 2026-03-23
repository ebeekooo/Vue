<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <!--chatMessages-->
    <ChatMessages :messages="messages" />

    <!--MessageBox-->
    <MessageBox @send-messages="onMessage($event)" />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/chatMessages.vue';
import MessageBox from '@/components/chat/messageBox.vue';
import { useChat } from '../components/composables/useChat';

const { messages, onMessage } = useChat();
</script>
