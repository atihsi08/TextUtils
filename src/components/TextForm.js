import { useState } from "react";

export function TextForm(props) {

  const mode = props.mode === "light" ? "dark" : "light";

  const handleUpClick = () => {
    setText(text.toLocaleUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLocaleLowerCase());
  };

  const handleCapClick = () => {
    let wordArr = text.toLocaleLowerCase().split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substring(1);
    }
    let str = wordArr.join(" ");
    setText(str);
  }

  const handleClear = () => {
    setText("");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container my-3 text-${mode}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className={`form-control text-${mode}`}
            id="exampleFormControlTextarea1"
            rows="12"
            style={{background:props.mode === "light"?"white":props.mode==="dark" ? "#36454F" : props.mode, "borderSize":"10px"}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className={`btn btn-${mode} mx-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${mode} mx-2`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${mode} mx-2`} onClick={handleCapClick}>
          Capitalize First Word
        </button>
        <button className={`btn btn-${mode} mx-2`} onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className={`container my-3 text-${mode}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter(function(n){return n !== ""}).length} words and {text.length} characters</p>
        <p>{(0.008 * (text.split(" ").length - 1)).toFixed(3)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in above textbox to preview it here..."}</p>
      </div>
    </>
  );
}
