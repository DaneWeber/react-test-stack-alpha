import React from "react";
import TestRenderer from "react-test-renderer";
import Link from "./Link";

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);
const testInstance = testRenderer.root;

test("Link component has a page link", () => {
  expect(testInstance.findByType(Link).props.page).toBe(
    "https://www.facebook.com/"
  );
});
