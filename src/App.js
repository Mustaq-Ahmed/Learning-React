import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      document.title = "Play-Text Dark-Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("success", "Light mode has been enabled")
      document.title = "Play-Text Light-Mode"

    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} /> */}
    </>
  );
}

export default App;


