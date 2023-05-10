import React, { useState } from "react";
export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared All Text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied all text", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed all extra spacess", "success");
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2c325c" : "white",
              color: props.mode === "dark" ? "white" : "#2c325c",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <h1>Your text summary</h1>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>

        <h2>Preview</h2>

        <p>{text.length > 0 ? text : "Nothing to preview here..... "}</p>
      </div>
    </>
  );
}
