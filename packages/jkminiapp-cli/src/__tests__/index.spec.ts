import JkminiappCli from "../";

describe("meaning of life", () => {
  it("should be 42", () => {
    const cli = new JkminiappCli();
    cli.run();
  });
});
