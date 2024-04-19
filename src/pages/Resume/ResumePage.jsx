// header, link React/dom/css/footer/
import React from "react";
// import { postDb, getDb, deleteDb } from './database';
import "../../styles/Resume.css";

const ResumePage = () => {
    return (
        <div id="resume">
        <a className="resumeContent" href="../public/resume/resume.pdf">Click Here - - View Resume</a>
        <a href=""><img className="resumeLinkImg" src="../src/images/resume.jpeg" alt="resumeImg"/></a></div>
    );
}

export default ResumePage
// ·•··•· 
// ‐︲‐‐︲︲‐︲‐︲︲‐‐︲‐
// -︲--︲︲-︲-︲︲--︲-