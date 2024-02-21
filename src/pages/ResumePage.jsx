// header, link React/dom/css/footer/
import React from "react";
// import { postDb, getDb, deleteDb } from './database';
import "../components/UI/Resume.css";

const ResumePage = () => {
    return (
        <div id="resume">
        <a className="resumeContent" href="../public/resume/resume.pdf">View Resume Here</a>
        <a href="" ><img className="resumeLinkImg" src="../public/images/resume.jpeg" alt="resumeImg"/></a></div>
    );
}

export default ResumePage 