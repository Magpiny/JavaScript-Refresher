const { fmtperc, add3 } = require("./../Intl");

// First test
// test("Expecting a percentage format", () => {
//   expect(fmtperc.format(0.88).toEqual("88%"));
// });

test("Sum 3 Nos", () => {
  expect(add3(3, 4, 5).toBe(12));
});
