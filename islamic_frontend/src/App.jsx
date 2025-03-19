import React from "react";
import HomeBanner from "./components/Banner";
import Header from "./components/Header"; 
import Welcome from "./components/Welcome";
import Library from "./components/Library";
import Video from "./components/Video";
import Pillars from "./components/Pillars";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer"; 


const App = () =>{
    return( 
        <>
        <main>
            <Header />
            <HomeBanner />
            <Welcome />
            <Library />
            <Video />
            <Pillars />
            <FAQ />
            <Footer />
        </main>
        </>
    )
}

export default App;