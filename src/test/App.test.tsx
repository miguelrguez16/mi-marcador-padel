import { render } from "@testing-library/react";
import App from "../App";

describe("REnder Component App init", () => {
  it("adds 1 + 2 to equal 3", () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    const mainApp = document.getElementById("mainApp");
    expect(mainApp).toBeInTheDocument();
  });
});
