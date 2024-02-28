import React from 'react'
import video1 from "../images/course-video.mp4";
import { useEffect } from "react";
const Mainbanner = () => {
   
    return (
        <>
            <section className="section main-banner" id="top" data-section="section1">
                <video autoPlay muted loop id="bg-video">
                    <source src={video1} type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Assam Glam Makeup Studio</h6>
                        <h2><em>Your</em> classNameroom</h2>
                        <div className="main-button">
                            <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Mainbanner;