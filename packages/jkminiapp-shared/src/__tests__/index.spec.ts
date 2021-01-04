import { whatIsTheMeaningOfLife } from "../";

describe("meaning of life", () => {
  it("should be 12", () => {
    expect(whatIsTheMeaningOfLife()).toEqual(12);
  });
});
