import React from "react";
import { shallow } from "enzyme"

import ApiExample from './ApiExample';
import mockAxios from "axios";

jest.mock('axios');

describe("<ApiExample />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ApiExample />);
  });

  xit("unit test lesson 10: mock that api request!", () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(
        { data: { title: "Fake Title" } }
      )
    );

    const button = wrapper.find(".apiObjectButton");
    button.simulate("click");

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/todos/1`
    )
  })
})