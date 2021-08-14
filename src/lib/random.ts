/**
 * @param min
 * @param max
 * @returns a random number between `min` and `max` (both included):
 */

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
