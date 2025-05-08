import React, { useRef } from 'react';
import usericon from 'adminbsb-materialdesign/images/user.png'
const SideBar = () => {
    const arrowRef = useRef(null)
    const User_Helper_Dropdown = document.querySelector(".user-helper-dropdown");
    const showLogoutMenu = () => {
        User_Helper_Dropdown.classList.add('open')
    }
    const arrowMouseHandler = (event) => {
        if (event.target === arrowRef.current) {
            return;
        } else {
            User_Helper_Dropdown.classList.remove('open')
        }
    }

    return (
        <section>

            <aside id="leftsidebar" className="sidebar">

                <div className="user-info">
                    <div className="image">
                        <img src={usericon} width="48" height="48" alt="User" />
                    </div>
                    <div className="info-container">
                        <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                        <div className="email">john.doe@example.com</div>
                        <div className="btn-group user-helper-dropdown">
                            <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                                onClick={showLogoutMenu}
                                ref={arrowRef}
                                onMouseDown={arrowMouseHandler}
                            >keyboard_arrow_down</i>
                            <ul className="dropdown-menu pull-right">
                                <li><a href="#" className=" waves-effect waves-block"><i className="material-icons">input</i>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="menu">
                    <div className="slimScrollDiv" style={{ position: "relative", overflow: "hidden", width: "auto", height: " 20px", }}>
                        <ul className="list" style={{ overflow: "hidden", width: "auto", height: "20px", }}>
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active">
                                <a href="index.html" className="toggled waves-effect waves-block">
                                    <i className="material-icons">home</i>
                                    <span>Home</span>
                                </a>
                            </li>

                        </ul>
                        <div className="slimScrollBar" style={{ background: "rgba(0, 0, 0, 0.5)", width: "4px", position: "absolute", top: " 0px", opacity: "0.4", display: "block", borderRadius: "0px", zIndex: "99", right: "1px", height: "30px" }}></div>

                        <div className="slimScrollRail" style={{ width: "4px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "0px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: "90", right: "1px" }}></div>
                    </div>
                </div>
                <div className="legal">
                    <div className="copyright">
                        © 2016 - 2017 <a href="#">AdminBSB - Material Design</a>.
                    </div>
                    <div className="version">
                        <b>Version: </b> 1.0.5
                    </div>
                </div>
            </aside>
        </section>
    )

}

export default SideBar;