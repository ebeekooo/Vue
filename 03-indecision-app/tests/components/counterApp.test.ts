import { describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import counter from "../../src/components/counterApp.vue";
describe("Testing counte", () => {
  test("shouls match snapshot", () => {
    const wrapper = mount(counter, {
      props: {
        value: 5,
      },
    });
    console.log(wrapper.html());
  });
});
