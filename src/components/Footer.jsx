import React from "react";
import "../styles/Footer.css";
import footerIcon from "../images/React-Animation01.gif"
import Blips from "../images/Instagram-Animation.gif"
import LinkUp from "../images/LinkedInAnimation.gif"
import CompressRefract from "../images/SpotifyAnimation.gif"

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
    {/* <a href="https://react.dev/"><img id="FooterIcon" src="../images/React-Animation01.gif" alt="FooterIcon"/></a> */}
    <a href="https://react.dev/"><img id="FooterIcon" src={footerIcon} alt="FooterIcon"/></a>
    <p className="FooterMsg"> Get connected 4 free </p>
    <a href="https://www.instagram.com/marlieford/"><img id="Blips" src={Blips} className="igAnimation"/></a>
    <p className="LinkedIn"></p>
    <a href="http://www.linkedin.com/in/marlie-ford/"><img id="LinkUp" src={LinkUp} className="linkedinAnimation"/></a>
    <p className="Spotify"></p>
    <a href="http://open.spotify.com/user/marlieford?si=S1fXcuhDQN2f45LRfnI2Eg"><img id="CompressRefract" src={CompressRefract} className="spotifyAnimation"/></a>
    </div>
);
}

/* <a className="IG" href="https://www.instagram.com/marlieford/"></a><p className="Instagram"> Get connected 4 free </p>
<button id="igAnimation" ><img id="FooterIcon" src="" alt="FooterIcon" /></button>
<button onClick={handleClick}><img src="../public/images/Instagram-Animation.gif" alt="IG" /></button> */

export default Footer;