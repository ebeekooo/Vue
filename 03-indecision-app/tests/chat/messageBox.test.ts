import MessageBox from "@/components/chat/messageBox.vue";
import { mount } from "@vue/test-utils";

describe("<messageBox>", () => {
  test("renders input and output elements correctly", () => {
    const wrapper = mount(MessageBox);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
});
