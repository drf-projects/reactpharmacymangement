import React from 'react';
import Overlay from './Overlay';
import PageLoader from "./PageLoader";
import Navbar from "./Navbar";
import HomeComponent from './HomeComponent';
import SideBar from './SideBar';
import GoogleFontLoader from "react-google-font-loader";
import 'adminbsb-materialdesign/css/themes/all-themes.css';

class MainComponent extends React.Component {
    state = {
        bodyClass: 'theme-red ls-closed'
    }
    onBarClick = () => {
        if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
          this.setState({ bodyClass: "theme-red ls-closed" });
          this.setState({ displayOverlay: "none" });
        } else if (this.state.bodyClass == "theme-red ls-closed") {
          this.setState({ bodyClass: "theme-red ls-closed overlay-open" });
          this.setState({ displayOverlay: "block" });
        }
      };

    render() {
        window.addEventListener('resize', () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1150) {
                document.querySelector("#root").className = "theme-red"
            } else {
                document.querySelector("#root").className = this.state.bodyClass;
            }
        })
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
                <Navbar onBarClick={this.onBarClick} />
                <SideBar />
                <HomeComponent />
            </>
        );
    }
}

export default MainComponent;
