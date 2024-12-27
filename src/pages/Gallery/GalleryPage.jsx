import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/Gallery.css";

const GalleryPage = () => {
    const tiles = Array(15).fill(null); // Adjust this number for your desired total of tiles

    return (
        <div className="galleryPage">
            <Header />
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png" className="pic"></img>
        <img id="img" src="../src/images/Red_square.svg.png"></img>
        {/* <Footer></Footer> */}
        </div>
    );
};

export default GalleryPage;