// header, link React/dom/css/footer/
import React from "react";
// import { postDb, getDb, deleteDb } from './database';
import "../../styles/Resume.css";
// import "../Resume";

const ResumePage = () => {
    return (
        <div id="resume">
        <a className="resumeContent" href="../src/pages/Resume/Document9.pdf">Click Here - - View Resume</a>
        <a href=""><img className="resumeLinkImg" src="../src/pages/Resume/Resume.png" alt="resumeImg"/></a></div>
    );
}
export default ResumePage