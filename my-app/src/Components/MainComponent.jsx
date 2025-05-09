import React, { useEffect } from 'react'
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from "./Navbar";
import HomeComponent from "./HomeComponent";
import SideBar from "./SideBar";
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css";

const MainComponent = () => {
    useEffect(() => {
        window.addEventListener('resize', () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1150) {
                document.querySelector("#root").className = "theme-red"
            } else {
                document.querySelector("#root").className = 'theme-red ls-closed'
            }
        })
    })
   const onBarClick=()=>{
        const overlay_open = document.querySelector("#root");
        const overlay_div = document.querySelector(".overlay");
        overlay_open.classList.toggle("overlay-open");
        overlay_div.style.display='none';
        console.log(overlay_open.classList.contains('overlay-open'))
        if(overlay_open.classList.contains('overlay-open')){
            overlay_div.style.display='block';
        }
    }

    return (
        <>

            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto Mono',
                        weights: [400, 700],
                    },
                ]}
                subsets={['latin', 'cyrillic-ext']}
            />
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Material+Icons',
                    }
                ]}
            />
            <Overlay />
            <Navbar onBarClick={onBarClick} />
            <SideBar />
            <HomeComponent />
        </>
    )
}

export default MainComponent;