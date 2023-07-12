import "./App.css";
import Navbar from "./components/Navbar"; 
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const [modeBtn, setModeBtn] = useState("Enable Dark Mode");
  const darkfunc = () => {
    if (mode === "light") {
      setMode("dark");
      setModeBtn("Enable Light Mode");
      document.body.style.backgroundColor = "rgb(21,37,43)";
      showAlert("Dark Mode has enabled","success");
      document.title = 'TextUtils - DarkMode';
    } else {
      setMode("light");
      setModeBtn("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has enabled","success");
      document.title = 'TextUtils - LightMode';
      setInterval(()=>{
        document.title = "TextUtils is Amazing";
      },2000

      );
      setInterval(()=>{
        document.title = "Install TextUtils Now!";
      },1500);
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        darkfunc={darkfunc}
        modeBtn={modeBtn}
      />
      <Alert alert={alert}></Alert>
      <Routes>
          <Route exact path="/about" 
          element = {<About modeBtn={modeBtn} mode={mode} darkfunc={darkfunc}/>}>
          </Route>
          <Route exact path="/"
          element = {<TextArea mode={mode} darkfunc={darkfunc} modeBtn={modeBtn} showAlert = {showAlert}/>}>
          </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
