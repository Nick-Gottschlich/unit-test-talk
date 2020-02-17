import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

const props = {
  toggled: "toggled",
  unToggled: "unToggled"
};

describe("unit tests are as cute as a button", () => {
  let wrapper;

  // this beforeEach using a const props saves a lot of duplicated code
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  xit("unit test lesson 5: click that button", () => {
    console.log(wrapper.debug());

    expect(wrapper.text()).toEqual(props.unToggled);

    wrapper.simulate("click");

    console.log(wrapper.debug());

    expect(wrapper.text()).toEqual(props.toggled);
  });

  xit("unit test lesson 6: those clicks don't carry! [because of beforeEach]", () => {
    console.log(wrapper.debug());
  });
});
