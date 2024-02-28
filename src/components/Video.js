import React from 'react'
import mainThumb from "../images/main-thumb.png";
import video1 from "../videos/viddeo1.mp4";
const Video = () => {
    return (
        <>
            <section class="section video" data-section="section5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <div class="left-content">
                                <span>our presentation is for you</span>
                                <h4>Watch the video to learn more <em>about our Assam Glam Makeup Studio</em></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi necessitatibus labore, ut distinctio eligendi nostrum deserunt ratione esse placeat, dolorem explicabo quasi omnis error fugit, odit ducimus provident incidunt praesentium atque. Dolore.</p>
                                <br /><br /><p>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                                    <div class="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <article class="video-item">
                                <div class="video-caption">
                                    <h4>Assam Glam Makeup Studio</h4>
                                </div>
                                <figure>
                                    <a href={video1} class="play"><img src={mainThumb} /></a>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Video;