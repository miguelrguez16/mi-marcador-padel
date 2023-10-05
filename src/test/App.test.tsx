import React from "react";
import App from "../App";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("REnder Component App init", () => {
  it("Render app", () => {
    render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    const main = document.getElementById("mainApp");
    expect(main).toBeInTheDocument();
  });
});
