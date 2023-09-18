import React from "react";
import './index.css'
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);
  return (
    
    <div >
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
