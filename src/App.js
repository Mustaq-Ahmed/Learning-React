import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(type, message) {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0d0d33"
      showAlert("success", "Dark mode has been enabled")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("success", "Light mode has been enabled")
    }
  }


  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
