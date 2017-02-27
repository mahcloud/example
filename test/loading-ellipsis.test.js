jest.unmock("../app/components/loading-ellipsis");
jest.useFakeTimers();

import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import LoadingEllipsis from "../app/components/loading-ellipsis";

describe("LoadingEllipsis", () => {
  it("should accept child props text", () => {
    let text = "Testing";
    const comp = TestUtils.renderIntoDocument(<LoadingEllipsis>{text}</LoadingEllipsis>);
    const node = ReactDOM.findDOMNode(comp);

    expect(node.textContent).toEqual(text);
  });

  it("should make dots", () => {
    const comp = TestUtils.renderIntoDocument(<LoadingEllipsis/>);
    const node = ReactDOM.findDOMNode(comp);

    expect(node.textContent).toEqual("Loading");

    jest.runOnlyPendingTimers();
    expect(node.textContent).toEqual("Loading.");

    jest.runOnlyPendingTimers();
    expect(node.textContent).toEqual("Loading..");

    jest.runOnlyPendingTimers();
    expect(node.textContent).toEqual("Loading...");

    jest.runOnlyPendingTimers();
    expect(node.textContent).toEqual("Loading");

    jest.runTimersToTime(1000);
    expect(node.textContent).toEqual("Loading..");
  });
});
