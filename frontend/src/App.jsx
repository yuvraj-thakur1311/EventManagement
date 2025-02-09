import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { ToastCont } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return(
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      {/* <Toaster/> */}
      {/* <ToastContainer/> */}
    </div>
  )
}

export default App;