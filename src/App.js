import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextUtil from "./components/TextUtil";
import About from "./components/About";
import Login from "./components/Login";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled!", "success");
      document.title = "Text Analyzer - Dark Mode";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled!", "success");
      document.title = "Text Analyzer - Light Mode";
    }
  };

  return (
      <div
        className={`main bg-${mode} text-${mode === "light" ? "dark" : "light"}`}
      >
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          theme={mode}
          toggleMode={toggleMode}
        />

        {alert && <Alert message={alert.msg} type={alert.type} />}

        {/* <Progress progress={30} label={true}/> 
        <TextForm/> */}
        <Routes>

          <Route 
          path="/"
          element={<TextUtil showAlert={showAlert} mode={mode} />}
          />

          <Route
          path="/about"
          element={<About />}
          />

          <Route
          path="/login"
          element={<Login mode={mode}/>}
          />

        </Routes>
      </div>
  );
}

export default App;
