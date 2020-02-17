import * as React from "react";

const TextBox = props => {
  return (
    <div onClick={() => props.handleClick()} style={{color: "pink", border: "1px solid purple"}}>
      <h1>
        {props.title}
      </h1>
      <h2>
        {props.subtitle}
      </h2>
      <ul>
        {props.options.map(option => {
          return (
            <li key={option.key}>
              {option.displayName}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default TextBox;
