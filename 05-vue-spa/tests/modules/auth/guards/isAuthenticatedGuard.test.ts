import isAuthenticatedGuard from '../../../../src/modules/auth/guards/is-authenticated.guard';
import type { RouteLocationNormalized } from 'vue-router';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('is-authenticated.guard', () => {
  const to: RouteLocationNormalized = {
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    name: undefined,
    path: '/home-screen',
    params: {},
    meta: {},
  };

  const from: any = {};

  const next = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  test('should block if not authenticated', async () => {
    isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({
      name: 'login',
    });
  });

  test('should called localStorage set item lastPath', async () => {
    isAuthenticatedGuard(to, from, next);

    const lastPath = localStorage.getItem('lastPath');

    expect(lastPath).toBe(to.path);
  });

  test('should block fi not authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    isAuthenticatedGuard(to, from, next);

    expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path);
  });

  test('should pass if authenticated', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('ABC-123456');

    isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({ name: 'login' });
  });
});
