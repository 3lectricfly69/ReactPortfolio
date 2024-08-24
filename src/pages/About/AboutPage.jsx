/* eslint-disable no-unused-vars */
// header, link React/dom/css/footer/
import "../../styles/About.css";
import React from 'react';
import Proflex from "../../images/profileImg.png"

  // In `Card`, we can assign a style from an object by using curly braces
  // We are assigning the card, heading, and content all from our `style` object
const AboutPage = () => {
    return (
    <div className="div01"><div className="AboutPageCard" >
        <section className="aboutWrap">
    <div className="Heading">Descriptive synopsis:</div>
    <div id="Msg">
        This here descriptor pertaining to Marlie Morgen Ford includes * that it includes next
    <img id="Proflex" src={Proflex} className="profileImg"/>
</div>
</section>
    </ div></div>
    );
}
export default AboutPage
