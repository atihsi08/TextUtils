import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (modeColor) => {
    let color = "";
    if (mode !== modeColor && modeColor !== "light") {
      // setMode("dark");
      setMode(modeColor);
      switch (modeColor) {
        case "dark": color = "#36454F";
          break;
        case "purple": color = "#BF00FF";
          break;
        case "orange": color = "#FF6700";
          break;
        case "pink": color = "#FF10F0";
          break;
        default: color = "#36454F";
      }
      document.body.style.backgroundColor = color;
      showAlert("Dark mode has been enabled.", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
