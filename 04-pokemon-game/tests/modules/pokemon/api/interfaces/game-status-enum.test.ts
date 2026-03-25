import { gameStatus } from '@/modules/pokemon/interfaces/game-status.enum';

describe('gameStatus enum', () => {
  test('should have a value of "playing"', () => {
    expect(gameStatus.Playing).toBe('playing');
  });
  test('should have a value of "won"', () => {
    expect(gameStatus.Won).toBe('won');
  });
  test('should have a value of "lost"', () => {
    expect(gameStatus.Lost).toBe('lost');
  });
});
