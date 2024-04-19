// header, link React/dom/css/footer/
import { React } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/Gallery.css";

const GalleryPage = () => {
    return (
        <p>
        <Header></Header>
        <a className="galleryBody">Gallery</a>
        <div className="galleryTiles">
            <img src="" alt="" />
            <div className="caption">
            </div>
        </div>
        <div className="galleryTiles">
            <img src="" alt="" />
            <div className="caption">
            </div>
        </div>
        <div className="galleryTiles">
            <img src="" alt="" />
            <div className="caption">
            </div>
        </div>
        <div className="galleryTiles">
            <img src="" alt="" />
            <div className="caption">
            </div>
        </div>
        <div className="galleryTiles">
            <img src="" alt="" />
            <div className="caption">
            </div>
        </div>
        <Footer></Footer>
        </p>
    )
}

export default GalleryPage
