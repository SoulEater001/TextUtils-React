// Components should carry Camel case
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtiles - Dark";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtiles - Light";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtiles" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} mode={mode} />


      <div className="container my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}> */}
        {/* </Route> */}
        {/* <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}> */}
        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
