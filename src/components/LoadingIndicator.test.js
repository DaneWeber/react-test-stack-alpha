import React from "react";
import TestRenderer from "react-test-renderer";
import LoadingIndicator from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  describe("when isLoading is false", () => {
    it("should render children", () => {
      // Arrange
      // Act
      const wrapper = TestRenderer.create(
        <LoadingIndicator isLoading={false}>
          <div>ahoy!</div>
        </LoadingIndicator>
      );

      // Assert
      const result = wrapper.root;
      expect(result.findByType("div").children[0]).toEqual("ahoy!");

      // The following doesn't work, while there is no visual difference.
      // expect(wrapper.toJSON()).toEqual(<div>ahoy!</div>);

      // Clean up
      wrapper.unmount();
    });
  });
});
