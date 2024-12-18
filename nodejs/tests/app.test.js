const addition = require("./../app");
const { add } = require("./../app");

test("Expecting sum of 4+4 to be 8", () => {
  expect(addition(4, 4)).toBe(8);
});
