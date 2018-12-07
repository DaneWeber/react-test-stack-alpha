import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import App from "./App";
// Why do I have to import LoadingIndicator when it is imported in App?
import LoadingIndicator from "./components/LoadingIndicator";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Includes the LoadingIndicator", () => {
  // Arrange
  // Act
  const wrapper = TestRenderer.create(<App />);

  // Assert
  const result = wrapper.root;
  expect(result.findByType(LoadingIndicator)).toBeDefined();
  expect(
    result.findByType(LoadingIndicator).findByType("div").children
  ).toEqual(["ahoy!"]);

  // Clean up
  wrapper.unmount();
});
