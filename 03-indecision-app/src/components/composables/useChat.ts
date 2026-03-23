import { ref } from "vue";
import type { chatMessage } from "@/interfaces/chat-msg-interface";
import type { Response } from "@/interfaces/yes-no-response";

export const useChat = () => {
  const messages = ref<chatMessage[]>([]);
  const getHerResponse = async () => {
    const resp = await fetch("https://yesno.wtf/api");
    const data = (await resp.json()) as Response;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });
    //evaluar si termina en un ?
    if (!text.endsWith("?")) return;
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    //properties
    messages,

    //methods
    onMessage,
  };
};
