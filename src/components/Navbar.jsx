// import React from "react";
// import { useSelector } from "react-redux";
// import { Col, Row, Container } from "../Grid/Grid";
import "./UI/Navbar.css";
import Link  from "react-router-dom";
import * as React from 'react';
import * as ReactDOM from 'react-dom';


export default function Navbar() {

    return(
    
        <div className="Navbar">
        {/* <Row> */}
            <div className="name">
            <p className="text">Marlie Ford</p>
            </div>
        
            <div>
            <Link to="/HomePage">
                <p className="homePage">
                Home
                </p>
            </Link>
            </div>

            <div>
                <Link to="/AboutPage">
                    <p className="aboutPage">
                    About
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/ContactPage">
                    <p className="contactPage">
                    Contact
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/ResumePage">
                    <p className="resumePage">
                    Resume
                    </p>
                </Link>
            </div>

            <div>
                <Link to="/ProjectsWindowPage">
                    <p className="projectsPage">
                    Projects
                </p>
            </Link>
            </div>

            <div>
                <Link to = "/GalleryPage">
                    <p className="galleryPage">
                    Gallery
                    </p>
                </Link>
            </div>
        {/* </Row> */}
        </div>
    )

}