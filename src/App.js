import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="App">
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
