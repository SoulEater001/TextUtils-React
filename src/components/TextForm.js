import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Success");
    setText(text.toUpperCase());
    props.showAlert('Converted to Upper Case!', "success")
  };

  const handleLoClick = () => {
    console.log("Success");
    setText(text.toLowerCase());
    props.showAlert('Converted to Lower Case!', "success")
  };

  const handleOnChange = (event) => {
    console.log("Change");
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    let newText = '';
    setText(newText);
    props.showAlert('Cleared Text Area!', "success")
  };

  const handleCopyClick = (event) => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied', "success")
  };

  const handleExtraClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Deleted Extra Spaces', "success")
  };
  return (<>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
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
    </div >

    <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>Text Summary</h2>
      <p>Words {text.trim() === "" ? '0' : text.trim().split(/\s+/).length} & Characters {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2 className="my-2">Preview</h2>
      <p>{text.length > 0 ? text : "Enter something to preview"}</p>
    </div>
  </>);
}
