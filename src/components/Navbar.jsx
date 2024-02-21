// import { useSelector } from "react-redux";
import "./UI/Navbar.css";
import { Link }  from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

export default function Navbar() {

    return(
        
        <div className="Navbar">
        {/* <Row> */}
            <Header></Header>
            <div>
            <Link className="HomeLink" to="/">
                <p className="homePage">
                Home
                </p>
            </Link>
            </div>

            <div>
                <Link className="HomeLink" to="/About">
                    <p className="aboutPage">
                    About
                    </p>
                </Link>
            </div>

            <div>
                <Link className="HomeLink" to="/Contact">
                    <p className="contactPage">
                    Contact
                    </p>
                </Link>
            </div>

            <div>
                <Link className="HomeLink" to="/Resume">
                    <p className="resumePage">
                    Resume
                    </p>
                </Link>
            </div>

            <div>
                <Link className="HomeLink" to="/Projects">
                    <p className="projectsPage">
                    Projects
                </p>
            </Link>
            </div>

            <div>
                <Link className="HomeLink" to = "/Gallery">
                    <p className="galleryPage">
                    Gallery
                    </p>
                </Link>
            </div>
        {/* </Row> */}
        </div>
    )

}
