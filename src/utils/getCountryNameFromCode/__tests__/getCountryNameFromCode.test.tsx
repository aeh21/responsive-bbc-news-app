import getCountryNameFromCode from "..";

describe("getCountryNameFromCode", () => {
  it("returns the correct name based on country code", () => {
    expect(getCountryNameFromCode("gb")).toEqual("United Kingdom");
  });
});
