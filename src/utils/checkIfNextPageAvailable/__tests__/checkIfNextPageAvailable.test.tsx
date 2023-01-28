import checkIfNextPageAvailable from "..";

describe("checkIfNextPageAvailable", () => {
  it("should return true if the total results is less than or equal the sum of results on previous page and the page size", () => {
    expect(checkIfNextPageAvailable(1, 5, 25)).toBe(true);
  });

  it("should return false if the total results is more or equal to the sum of results on previous page and the page size", () => {
    expect(checkIfNextPageAvailable(5, 5, 25)).toBe(false);
  });
});
