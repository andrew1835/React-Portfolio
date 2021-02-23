import React from "react";
import "./style.css"

function Header() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#about" onClick={() => props.handlePageChange("About")}>Andrew Anthony</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        //         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#about" onClick={() => props.handlePageChange("About")}>About Me<span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#portfolio" onClick={() => props.handlePageChange("Portfolio")}>Portfolio</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#contact" onClick={() => props.handlePageChange("Contact")}>Contact</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">Andrew Anthony</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">About Me<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;
