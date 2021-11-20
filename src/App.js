import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  function toggleMode(){
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#0d0d33"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading = "Enter Text to Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
