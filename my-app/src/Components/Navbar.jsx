import React from 'react';


const Navbar = ({ onBarClick }) => {

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="bars" onClick={onBarClick}></a>
                        <a className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</a>
                    </div>

                </div>
            </nav>
        </>
    )
}


export default Navbar