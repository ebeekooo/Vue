<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <!--chatMessages-->
    <ChatMessages :messages="messages" />

    <!--MessageBox-->
    <MessageBox />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/chatMessages.vue';
import MessageBox from '@/components/chat/messageBox.vue';
import type { chatMessage } from '@/interfaces/chat-msg-interface';
import { ref } from 'vue';

const messages = ref<chatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola world',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/15-3d723ea13af91839a671d4791fc53dcc.gif',
  },
]);
</script>
