import App from "./index";

describe("getCharacters", () => {
  it("10 registers", () => {
    expect(App.getCharacters()).toBe(10);
  });
});
