import { useState } from "react";
import "./App.css";
import Alert from "./PropsComponent/Alert";

import About from "./PropsComponent/About";
import Navbar from "./PropsComponent/Navbar";
import TextForms from "./PropsComponent/TextForms";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);

    if (Mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#010630";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title = "Install Dark TextUtils Now";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#010630";
      showAlert("Light mode has been enabled", "success");
      setInterval(() => {
        document.title = "Install Light TextUtils Now";
      }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={Mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForms
                  showAlert={showAlert}
                  heading="Enter the text to Analyze below"
                  mode={Mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
