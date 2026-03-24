import { mount } from "@vue/test-utils";
import counter from "@/components/counterApp.vue";
describe("Testing counter", () => {
  test("shouls match snapshot", () => {
    const wrapper = mount(counter, {
      props: {
        value: 5,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("renders the counter values correctly", () => {
    const wrapper = mount(counter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.find("h3"));
  });
});
