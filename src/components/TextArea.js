import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const click = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","success");
  };
  const clickL = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","success");
  };
  const change = (event) => {
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
    props.showAlert("Text is cleared","success");
  };
  const copy = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text is copied to clipboard","success");
  };
  const paste = () => {
    var pasteText = document.getElementById("exampleFormControlTextarea1");
    pasteText.select();
    let pasteT = navigator.clipboard.readText();
    setText(pasteT);
    props.showAlert("Text is pasted","success");
  };
  const handleExtraSpaces = () => {
    let newT = text.replace(/\s+/g, " ").trim();
    setText(newT);
    props.showAlert("Extra Spaces removed","success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="my-5">
          <label forr="exampleFormControlTextarea1" className="form-label mb-3"><h5>
            TRY TEXTUTILS - WORD COUNTER, REMOVE EXTRA SPACES , CONVERT TO UPPERCASE OR LOWERCASE </h5>
          </label>
          <textarea
            className="form-control"
            onChange={change}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
          <button type="button" className="btn btn-primary mx-3 my-3" onClick={click}>
            Convert To UpCase
          </button>
          <button type="button" className="btn btn-primary mx-3 my-3" onClick={clickL}>
            Convert To LowCase
          </button>
          <button type="button" className="btn btn-primary mx-3 my-3" onClick={clear}>
            Clear Text
          </button>
          <button type="button" className="btn btn-primary mx-3 my-3" onClick={copy}>
            Copy Text
          </button>
          {/* <button type="button" className="btn btn-primary m-3 " onClick={paste}>
            Paste Text
          </button> */}
          <button
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text Summary{" "}
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}> 
          {text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} minutes to read{" "}
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length>0?text:"Enter something to preview it here!"}
        </p>
      </div>
    </>
  );
}
