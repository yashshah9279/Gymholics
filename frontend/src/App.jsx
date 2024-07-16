import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css";
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import WorkoutSessions from './componenets/WorkoutSessions';
import Gallery from './componenets/Gallery';
import Pricing from './componenets/Pricing';
import Contact from './componenets/Contact';
import BMICalculator from './componenets/BMICalculator';
import Footer from './componenets/Footer';
const App = () => {
  return (
    <Router>
        <Navbar/>
        <Hero/>
        <WorkoutSessions/>
        <Gallery/>
        <Pricing/>
        <Contact/>
        <BMICalculator/>
        <Footer/>
        <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App