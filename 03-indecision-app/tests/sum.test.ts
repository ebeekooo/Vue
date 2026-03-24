import { test } from "vitest";
import { sum } from "../src/helpers/sum";

test("adds 1 + 2 to equal 3", () => {
  if (sum(1, 2) !== 3) {
    throw new Error("La suma no es correcta");
  }
});
