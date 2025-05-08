import React, { useEffect } from 'react'
import Overlay from './Overlay';
import PageLoader from './PageLoader';
import Navbar from "./Navbar";
import HomeComponent from "./HomeComponent";
import SideBar from "./SideBar";
import GoogleFontLoader from 'react-google-font-loader';
import "adminbsb-materialdesign/css/themes/all-themes.css"
const MainComponent2 = () => {
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
    onBarClick=()=>{
        const overlay_open = document.querySelector("#root");
        overlay_open.classList.add("overlay-open");
        if(overlay_open.classList.contains("overlay-open")){
            overlay_open.classList.remove("")
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

export default MainComponent2;