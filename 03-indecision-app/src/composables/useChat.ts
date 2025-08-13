import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNoResponde } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Holaaaaaa',
      itsMine: true,
      timestamp: new Date(),
    },
    {
      id: new Date().getTime() + 3,
      message: 'que bien',
      itsMine: false,
      image: 'https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif',
      timestamp: new Date(),
    },
  ]);

  const getHerResponse = async () => {
    const respo = await fetch('https://yesno.wtf/api');
    const data = (await respo.json()) as YesNoResponde;
    return data;
  };

  // Funcion que se ejecuta cuando se emite el evento send-message al escribir en el input
  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
      timestamp: new Date(),
    });

    // Simulamos la respuesta del bot
    if (!text.endsWith('?')) return;
    await sleep(1.5);

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image: image,
      timestamp: new Date(),
    });
  };

  return {
    // properties
    messages,

    // methods
    onMessage,
  };
};
