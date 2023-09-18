import React, { useEffect, useState } from "react";
import './index.css'
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);
 useEffect(()=>{
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
 },[loading])
  return (
    
    <div>
      {!loading && (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
