import * as React from "react";

const Button = props => {
  const [buttonText, setButtonText] = React.useState(props.unToggled);

  const handleClick = () => {
    buttonText === props.unToggled
      ? setButtonText(props.toggled)
      : setButtonText(props.unToggled);
  };

  return (
    <button style={{ height: "50px", width: "200px" }} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
