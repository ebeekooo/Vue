import { shallowMount } from '@vue/test-utils';
import FavBotton from '@/modules/common/components/FavBotton.vue';

describe('<FavBotton/>', () => {
  test('renders with default position', () => {
    const wrapper = shallowMount(FavBotton);

    // console.log(wrapper.html());
    expect(wrapper.props().position).toBe('bottom-right');
    const buttonClasses = wrapper.find('button').classes();
    const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right'];

    expect(buttonClasses).toEqual(classesToHave);
  });
  test('renders with top-left position', () => {
    const wrapper = shallowMount(FavBotton, {
      props: {
        position: 'top-left',
      },
    });

    const button = wrapper.find('button');

    expect(button.classes()).toContain('top-left');
  });
});
