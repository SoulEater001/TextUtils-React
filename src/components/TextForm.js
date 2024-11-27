import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Success");
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    console.log("Success");
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    console.log("Change");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    let newText = '';
    setText(newText);
  };
  const handleCopyClick = (event) => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (<>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraClick}>
          Remove Extra Spaces
        </button>
      </div>
    </div>

    <div className="container my-2">
      <h2>Text Summary</h2>
      <p>Words {text.split(" ").length} & Characters {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2 className="my-2">Preview</h2>
      <p>{text}</p>
    </div>
  </>);
}
