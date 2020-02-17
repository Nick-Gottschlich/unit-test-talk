/* eslint-disable no-unused-expressions */
import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";
import Menu from "./Components/Menu";

describe("unit tests for the app container", () => {
  let wrapper;

  xit("unit test lesson 1: true should be truthy... right?", () => {
    expect(true).toBeTruthy();
  });

  xit("unit test lesson 2: don't be so shallow (or do)", () => {
    wrapper = shallow(<App />);

    //debug() provides an easy way for us to "see" what enzyme sees
    console.log('SHALLOW:', wrapper.debug());

    wrapper = mount(<App />);

    console.log('MOUNT: ', wrapper.debug());
  });

  xit("unit test lesson 3: find those buttons!", () => {
    wrapper = shallow(<App />);

    console.log(wrapper.debug());

    const button = wrapper.find("Button");

    // console.log(button.debug());

    expect(button).toHaveLength(2);
  });

  xit("unit test lesson 4: but wait, what about the dot?", () => {
    wrapper = shallow(<App />);

    // console.log(wrapper.debug());

    const menu = wrapper.find("Menu");
    expect(menu).toHaveLength(1);

    // const menuItem = wrapper.find("Menu.Item");
    // expect(menuItem).toHaveLength(2);
    // This didn't work! Why not?
    // Because it actually looked for: <Menu className="Item" />

    // const menuItem = wrapper.find(<Menu.Item />);
    // expect(menuItem).toHaveLength(2);
    // So close!!

    // const menuItem = wrapper.find(Menu.Item);
    // expect(menuItem).toHaveLength(2);
    // Finally!
  })

  xit("unit tesson lesson bonus: snapshot shallow", () => {
    //add this in
  })
});
