import { expect, test } from "vitest";
import { sum, addArray } from "../src/helpers/sum";
import { describe } from "node:test";

describe("add function", () => {
  test("adds 1 + 2 to equal 3", () => {
    //preparacion
    const a = 1;
    const b = 2;
    //estimulo
    const result = sum(a, b);
    expect(result).toBe(a + b);

    //   if (sum(1, 2) !== 3) {
    //     throw new Error("La suma no es correcta");
    //   }
  });
});

describe("addArray function", () => {
  test("should retur 0 if array is empty", () => {
    const numberArray: number[] = [];
    const result = addArray(numberArray);
    expect(result).toBe(0);
  });
  test("should return proper value of the addArray function", () => {
    const numberArray: number[] = [1, 2, 3, 4, 5];
    const result = addArray(numberArray);
    expect(result).toBe(15);
  });
});
