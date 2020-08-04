import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Footer from "./footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
