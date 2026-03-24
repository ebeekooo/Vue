import { mount } from "@vue/test-utils";
import chatBubble from "@/components/chat/chatBubble.vue";

describe("<ChatBubble/>", () => {
  test("renders own message correctly", () => {
    const message = "Hola mundo";
    const wrapper = mount(chatBubble, {
      props: { message, itsMine: true },
    });
    expect(wrapper.find(".bg-blue-200").exists()).toBe(true);
    expect(wrapper.find(".bg-blue-200").exists()).toBeTruthy();
    expect(wrapper.find(".bg-blue-200").text()).toContain(message);
    expect(wrapper.find(".bg-gray-300").exists()).toBe(false);
  });
  test("renders recived message correctly", () => {
    const message = "Hola mundo";
    const wrapper = mount(chatBubble, {
      props: { message, itsMine: false },
    });
    expect(wrapper.find(".bg-gray-300").exists()).toBe(true);
    expect(wrapper.find(".bg-blue-200").exists()).toBe(false);

    expect(wrapper.find(".bg-gray-300").text()).toContain(message);
    expect(wrapper.find("img").exists()).toBe(false);
  });
});
