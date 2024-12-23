import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/Gallery.css";

const GalleryPage = () => {
    const tiles = Array(15).fill(null); // Adjust this number for your desired total of tiles

    return (
        <div className="galleryPage">
            <Header />
            <main className="galleryContent">
                <h1 className="galleryTitle">Gallery</h1>
                <div className="galleryGrid">
                    {tiles.map((_, index) => (
                        <div key={index} className="galleryTile">
                            <img src="/Red_square.svg.png" alt={`Red Square ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GalleryPage;