// import { useSelector } from "react-redux";
import "./UI/Navbar.css";
import { Link }  from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';


export default function Navbar() {

    return(
    
        <div className="Navbar">
        {/* <Row> */}
            <div className="name">
            <p className="text">Marlie Ford</p>
            </div>
        
            <div>
            <Link to="/">
                <p className="homePage">
                Home
                </p>
            </Link>
            </div>

            <div>
                <Link to="/About">
                    <p className="aboutPage">
                    About
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/Contact">
                    <p className="contactPage">
                    Contact
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/Resume">
                    <p className="resumePage">
                    Resume
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/Projects">
                    <p className="projectsPage">
                    Projects
                </p>
            </Link>
            </div>

            <div>
                <Link to = "/Gallery">
                    <p className="galleryPage">
                    Gallery
                    </p>
                </Link>
            </div>
        {/* </Row> */}
        </div>
    )

}