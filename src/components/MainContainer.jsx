import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Rough from "./rough";
import Footer from "./Footer";

function MainContainer() {

    return(
        <div className = "background-blur-lg relative w-full z-50 !font-custom">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Footer/>
        </div>
        
    )
}

export default MainContainer;