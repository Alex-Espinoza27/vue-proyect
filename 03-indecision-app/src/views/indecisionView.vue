<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Mi esposa</span>
      </div>
  
      <!-- chatMessages -->
      <ChatMessages :messages="messages"/>

      <!-- messagesBox -->
      <!-- <MessagesBox @send-message="onMessage($event)"/> -->
      <MessagesBox @send-message="onMessage"/>
      <!-- @ el arroba es para escuchar eventos emitidos por el componente hijo -->

    </div>
  </template>
<script setup lang="ts">
 
import { useChat } from '@/composables/useChat';
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessagesBox from '../components/chat/MessageBox.vue'; 

// COMUNICACION ENTRE COMPONENTES
const {messages, onMessage} = useChat();

// que es un composable function en vue 3
// https://v3.vuejs.org/guide/composition-api-introduction.html#what-is-a-composable

</script>

