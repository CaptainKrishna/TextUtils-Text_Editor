import React from "react";
import { useState } from "react";

export default function Todo(props) {
  // Using React Hooks
  const [text, setText] = useState("This is text area");

  // Function are use for changing state in react Page
  const handleonChange = (event) => {
    setText(event.target.value);
  };

  // Uppercase
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // Lowercase
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Deleting Function
  const handleDelete = () => {
    let newText = "";
    setText(newText);
  };

  // Copy Function
  const handleCopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Function for Removing space
  const handleRmovespace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div>
      <h1 className="titleHead">{props.title}</h1>
      {/* Text area */}
      <textarea
        name="Todo"
        value={text}
        onChange={handleonChange}
        cols="50"
        rows="5"
        className="contain"
        id="Mybox"
      ></textarea>

      <div className="container">
        <button className="btn" onClick={handleupClick}>
          Uppercase
        </button>
        <button className="btn" onClick={handleDownClick}>
          Lowercase
        </button>
        <button className="btn" onClick={handleDelete}>
          Clear
        </button>
        <button className="btn" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn" onClick={handleRmovespace}>
          Remove Spaces
        </button>
      </div>

      <div className="container lowerbox-area">
        <h2 className="text-md md:text-xl font-semibold">Your Text Summery</h2>
        <p className="">
          {text.split(" ").length - 1} word and {text.length} charactor
        </p>
        <h2 className="text-md md:text-xl font-semibold mt-5 justify-center">
          Preview
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
