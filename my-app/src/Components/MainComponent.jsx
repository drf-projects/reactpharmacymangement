import React from 'react';
import Overlay from './Overlay'
import PageLoader from "./PageLoader"
import Navbar from "./Navbar"
import HomeComponent from './HomeComponent'
import SideBar from './SideBar';
import GoogleFontLoader from "react-google-font-loader";
import 'adminbsb-materialdesign/css/themes/all-themes.css'
class MainComponent extends React.Component{
    render(){
        return (
            <>
            <GoogleFontLoader
            fonts={[
            {
                font: 'Roboto Mono',
                weights: [400, 700],
            },
            ]}
            subsets={['latin','cyrillic-ext']}
        />
        <GoogleFontLoader
            fonts={[
            {
                font: 'Material+Icons',
            }
            ]}

        />
            <Overlay/>
            <Navbar/>
            <SideBar/>
            <HomeComponent/>
            </>
        )
    }
}

export default MainComponent