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
      In 2018, I was hit by a drunk driver resulting in a coma inducing car accident. Through a miracle, I regained consciousness 
    eleven days later. Temporarily debilitating physical injuries aside, this resulted in a severe traumatic brain injury. 
    The rehabilitation process has been a long journey; one that coding has become an integral part of. 
    I began by completing my AS in Mass Communications with a minor in Psychology. This study of utilizing language to communicate 
    led to study of using coding languages to process data exchange within and between computers specifically.
    <img id="Proflex" src={Proflex} className="profileImg"/>
</div>
</section>
    </ div></div>
    );
}
export default AboutPage
