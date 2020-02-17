/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import axios from "axios";

const TextBox = () => {
  const [apiData, setApiData] = React.useState({});

  // Api contained within component, or it goes off to a file
  //  like api.ts where you can't mock it in as a prop
  const apiFetch = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    axios.get(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
      .then(response => {
        setApiData(response.data)
        console.log(apiData)
      })
  }

  const handleClick = () => {
    apiFetch();
  }

  React.useEffect(() => {
    apiFetch();
  }, []);


  return (
    <div style={{ color: "cyan", border: "1px solid gold" }}>
      <div>
        <button onClick={handleClick} className="apiObjectButton">
          Api Example! Click me!
        </button>
      </div>
      <div>
        <span className="apiObjectTitle">
          {apiData.title}
        </span>
      </div>
    </div>
  );
};

export default TextBox;
