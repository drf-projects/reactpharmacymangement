import React from 'react';


const Navbar = ({ onBarClick }) => {

    return (
        <>
            <nav className="navbar" style={{background:"#F44336",}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="bars" onClick={onBarClick}></a>
                        <a className="navbar-brand" href="index.html" style={{color:"white",}}>ADMINBSB - MATERIAL DESIGN</a>
                    </div>

                </div>
            </nav>
        </>
    )
}


export default Navbar