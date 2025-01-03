import React, { useState } from "react";

export default function TextUtil({showAlert, heading = "Text Analyzer", mode}) {
  const [text, setText] = useState("text");

  const [originalText, setOriginalText] = useState("text");

  const textChangeHandler = (event) => {
    let inputText = event.target.value;
    setText(inputText);

    if (text === originalText) {
      setOriginalText(inputText);
    }
  };

  const toOriginalHandle = () => {
    console.log("Original was clicked");
    setText(originalText);
    showAlert("The text was converted to original!", "success");
    if (text === "") showAlert("Please enter some text first!", 'warning')
  };

  const toUpperHandle = () => {
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    showAlert("The text was converted to uppercase!", "success");
    if (text === "") showAlert("Please enter some text first!", 'warning')
  };

  const toLowerHandle = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase());
    showAlert("The text was converted to lowercase!", "success");
    if (text === "") showAlert("Please enter some text first!", 'warning')
  };

  const toSentenceCase = (text) => {
    // Split the text into lines to preserve new lines
    const lines = text.split("\n");

    // Process each line separately
    const processedLines = lines.map((line) => {
      // Split the line into sentences using punctuation
      const sentences = line.split(/(?<=[.?!:])\s+/);

      // Capitalize each sentence
      const capitalizedSentences = sentences
        .filter((sentence) => sentence.trim() !== "") // Remove empty sentences
        .map((sentence) => {
          const trimmedSentence = sentence.trim();
          return (
            trimmedSentence[0].toUpperCase() +
            trimmedSentence.slice(1).toLowerCase()
          );
        });

      // Join the sentences back together
      return capitalizedSentences.join(" ");
    });

    // Handle new lines by joining the processed lines
    const result = processedLines.join("\n");

    // Correctly capitalize " I "
    return result.replace(/\b(i)\b/g, "I");
  };

  const handleSentenceCase = () => {
    setText(toSentenceCase(text));
    showAlert("The text was converted to Sentence case!", "success");
    if (text === "") showAlert("Please enter some text first!", 'warning')
  };

  return (
    <div
  className={`main-container bg-${
    mode === "light" ? "light-shade" : "dark-shade"
  } text-${mode === "light" ? "dark" : "light"}`}
>
      <div
        className={`container custom-container bg-${
          mode === "light" ? "light" : "dark"
        } text-${mode === "light" ? "dark" : "light"}`}
      >
        <h3 className="text-center">{heading}</h3>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${
              mode === "light" ? "light" : "dark"
            } text-${mode === "light" ? "dark" : "light"}`}
            value={text}
            onChange={textChangeHandler}
            placeholder="Enter your text here..."
            id="myBox"
            rows="8"
          />{" "}
        </div>
        <button
          type="submit"
          onClick={toUpperHandle}
          className="btn btn-primary mx-2"
        >
          Uppercase
        </button>
        <button
          type="submit"
          onClick={toLowerHandle}
          className="btn btn-primary"
        >
          Lowercase
        </button>
        <button
          type="submit"
          onClick={toOriginalHandle}
          className="btn btn-primary mx-2"
        >
          Original
        </button>
        <button
          type="submit"
          onClick={handleSentenceCase}
          className="btn btn-primary"
        >
          Title Case
        </button>
      </div>
      <div
        className={`container custom-container bg-${
          mode === "light" ? "light" : "dark"
        } text-${mode === "light" ? "dark" : "light"}`}
      >
        <h4>Character Count: </h4>
        <p>{text.length}</p>
        <h4>Word Count: </h4>
        <p>{text.split(" ").length}</p>
        <h4>Sentence Count: </h4>
        <p>{text.split(/(?<=[.?!:])\s+/).length}</p>
        <h4>Paragraph Count: </h4>
        <p>{text.split("\n").length}</p>
        <h4>Reading time: </h4>
        <p>
          {text.split(" ").length / 200} mins or{" "}
          {(text.split(" ").length / 200) * 60} seconds
        </p>
        <div className={`container2 bg-${
          mode === "light" ? "light" : "dark"
        } text-${mode === "light" ? "dark" : "light"}`}>
          <h4>Preview: </h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
