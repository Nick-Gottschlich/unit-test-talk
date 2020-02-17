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

  xit("title should match prop passed in", () => {
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

  xit("change props example", () => {
    let emptyOptions = [];

    wrapper.setProps({
      options: emptyOptions 
    })

    console.log(wrapper.debug());
  })

  xit("check if handle click gets called", () => {
    expect(mockFn).not.toHaveBeenCalled();

    wrapper.simulate("click");

    expect(mockFn).toHaveBeenCalled();
  })
})