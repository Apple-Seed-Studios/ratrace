const handle404 = require("../404");
const handle500 = require("../500");

const json = jest.fn();
const status = jest.fn(() => {
  return { json };
});

describe("error routes", () => {
  test("should return 404 error", () => {
    expect();
  });
  test("should return 500 error", () => {
    expect();
  });
});
