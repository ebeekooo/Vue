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

  test("increment counter when +1 botton is clicked", async () => {
    const value = 6;
    const wrapper = mount(counter, {
      props: {
        value: value,
      },
    });
    const counterLabel = wrapper.find('[data-testid="counterLabel"]')!;
    const squareLabel = wrapper.find('[data-testid="squareLabel"]')!;
    const btnSum = wrapper.find("button")!;

    await btnSum.trigger("click");

    expect(counterLabel.text()).toContain(`Counter:${value + 1}`);
    expect(squareLabel.text()).toContain(`Square:${(value + 1) * (value + 1)}`);
  });
  test("decrement the counter when -1 button is clicked twice", async () => {
    const value = 6;
    const wrapper = mount(counter, {
      props: {
        value: value,
      },
    });

    const counterLabel = wrapper.find('[data-testid="counterLabel"]')!;

    const [, btnRest] = wrapper.findAll("button")!;

    await btnRest.trigger("click");
    await btnRest.trigger("click");

    expect(counterLabel.text()).toContain(`Counter:${value - 2}`);
  });
});
