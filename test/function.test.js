const [average, greetingsPro] = require("./../functions");

test("Expecting a Number", () => {
  expect(average([7, 2, 3, 5, 8])).toBe(5);
});

test("Expecting a String", () => {
  expect(greetingsPro("John")).toBe("Hello John");
});
