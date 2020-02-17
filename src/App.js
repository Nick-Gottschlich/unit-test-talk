import React from "react";

import Button from "./Components/Button";
import Menu from "./Components/Menu";
import TextBox from "./Components/TextBox";
import ApiExample from "./Components/ApiExample";

import "./App.css";

const App = () => {
  const textBoxTitle = "Text Box Title";
  const textBoxSubTitle = "Text Box Subtitle";
  const textBoxItems = [
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
  const textBoxClickHandler = () => {
    console.log("you done went and clicked on the text box")
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button toggled="toggled" unToggled="unToggled" />
          <Button toggled="toggled" unToggled="unToggled" />
        </div>
        <Menu>
          <Menu.Item>
            Item 1
          </Menu.Item>
          <Menu.Item>
            Item 2
          </Menu.Item>
        </Menu>
        <div style={{ "marginBottom": "10px" }}>
          <TextBox
            title={textBoxTitle}
            subtitle={textBoxSubTitle}
            options={textBoxItems}
            handleClick={textBoxClickHandler}
          />
        </div>
        <ApiExample />
      </header>
    </div>
  );
}

export default App;
