describe('Main.st', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const vue = require('vue');

  const useSpy = vi.fn();
  const mountSpy = vi.fn();

  const createApp = vi.fn().mockReturnValue({
    use: useSpy,
    mount: mountSpy,
  });

  vue.createApp = createApp;
});
