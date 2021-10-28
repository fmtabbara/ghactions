import { strict as assert } from "assert";
import { map, reverseString, add } from "../functions.js";

describe("function tests", () => {
  it("should add one to each number in the array", () => {
    const original = [4, 5, 6];
    const mapped = map(original, (i) => i + 1);

    return assert.deepEqual(mapped, [5, 6, 7]);
  });
  it("should subtract one from each number in the array", () => {
    const original = [4, 5, 6];
    const mapped = map(original, (i) => i - 1);

    return assert.deepEqual(mapped, [3, 4, 5]);
  });
  it("should add ten to each item in the array", () => {
    const original = [4, 5, 6];
    const mapped = map(original, (i) => i + 10);

    return assert.deepEqual(mapped, [14, 15, 16]);
  });
  it("should reverse a string", () => {
    const original = "TestString";
    const reversed = reverseString(original);

    return assert.deepEqual(reversed, "gnirtStseT");
  });
  it("should add two numbers", () => {
    const result = add(1, 2);

    return assert.deepEqual(result, 4);
  });
});
