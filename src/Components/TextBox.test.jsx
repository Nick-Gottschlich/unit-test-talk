import React from "react";
import { shallow } from "enzyme"

import TextBox from './TextBox';

const mockOptions = [
  {
    key: "i1",
    displayName: "item1"
  },
  {
    key: "i2",
    displayName: "item2"
  },
  {
    key: "i3",
    displayName: "item3"
  }
]

const mockTitle = "Mock Title";

const mockFn = jest.fn();

const props = {
  title: mockTitle,
  subtitle: "Mock Subtitle",
  options: mockOptions,
  handleClick: mockFn,
}

describe("<Textbox />", () => {
  let wrapper;

  // this beforeEach using a const props saves a lot of duplicated code
  beforeEach(() => {
    wrapper = shallow(<TextBox {...props} />);
  });

  xit("lesson 7: mocking all the props", () => {
    console.log(wrapper.debug());

    const title = wrapper.find("h1");
    console.log(title.debug())
    
    expect(title.equals(
      <h1>
        Mock Title
      </h1>
    )).toBeTruthy();
    expect(title.text()).toBe(mockTitle);
  })

  xit("lesson 8: how to change props in a test", () => {
    let emptyOptions = [];

    wrapper.setProps({
      options: emptyOptions 
    })

    console.log(wrapper.debug());
  })

  xit("lesson 9: mock functions and .not", () => {
    expect(mockFn).not.toHaveBeenCalled();

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalled();
  })
})