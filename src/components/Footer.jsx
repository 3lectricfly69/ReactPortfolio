import React from "react";
import "./UI/Footer.css";

const styles = {
container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
},
};
const Footer = () => {
return (
    <div className="Footer" style={styles.container}>
    <p id="X">&copy; {new Date().getFullYear()}</p>
    <p className="React"> Generated using React via Marlie </p>
    <a href="https://react.dev/" ><button id="reactLogo"><img id="FooterIcon" src="../public/images/React-Animation01.gif" alt="FooterIcon" /></button></a>
    <p className="FooterMsg"> Get connected 4 free </p>
    <a href="https://www.instagram.com/marlieford/"><button><img src="../public/images/Instagram-Animation.gif" alt="IGClick" className="igAnimation"/></button></a>
    <p className="LinkedIn"></p>
    <a href="http://www.linkedin.com/in/marlie-ford/"><button><img src="../public/images/LinkedInAnimation.gif" alt="LinkedIn" className="linkedinAnimation"/></button></a>
    <p className="Spotify"></p>
    <a href="http://open.spotify.com/user/marlieford?si=S1fXcuhDQN2f45LRfnI2Eg"><button><img src="../public/images/SpotifyAnimation.gif" alt="spotifyAnimation" className="spotifyAnimation"/></button></a>
    </div>
);
}
/* <a className="IG" href="https://www.instagram.com/marlieford/"></a><p className="Instagram"> Get connected 4 free </p>
<button id="igAnimation" ><img id="FooterIcon" src="" alt="FooterIcon" /></button>
<button onClick={handleClick}><img src="../public/images/Instagram-Animation.gif" alt="IG" /></button> */

export default Footer;