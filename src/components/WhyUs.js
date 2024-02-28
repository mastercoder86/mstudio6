import React from 'react'
import choose1 from "../images/choose-us-image-01.png";
import choose2 from "../images/choose-us-image-02.png";
import choose3 from "../images/choose-us-image-03.png";
const WhyUs = () => {
    return (
        <>
            <section className="section why-us" data-section="section2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Why Choose Assam Glam Makeup Studio?</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div id='tabs'>
                                <ul>
                                    <li><a href='#tabs-1'>Best Education</a></li>
                                    <li><a href='#tabs-2'>Top Management</a></li>
                                    <li><a href='#tabs-3'>Quality Meeting</a></li>
                                </ul>
                                <section className='tabs-content'>
                                    <article id='tabs-1'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={choose1} alt="" />
                                            </div>
                                            <div className="col-md-6">
                                                <h4>Best Education</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore eaque quo tenetur similique, omnis atque, vel sit ullam repellendus suscipit distinctio nam ratione sequi. Recusandae sint eveniet delectus dolorem, sed quasi aliquid itaque deserunt beatae saepe hic libero assumenda!</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article id='tabs-2'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={choose2} alt="" />
                                            </div>
                                            <div className="col-md-6">
                                                <h4>Top Level</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore eaque quo tenetur similique, omnis atque, vel sit ullam repellendus suscipit distinctio nam ratione sequi. Recusandae sint eveniet delectus dolorem, sed quasi aliquid itaque deserunt beatae saepe hic libero assumenda!</p>
                                                <p>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article id='tabs-3'>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={choose3} alt="" />
                                            </div>
                                            <div className="col-md-6">
                                                <h4>Quality Meeting</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore eaque quo tenetur similique, omnis atque, vel sit ullam repellendus suscipit distinctio nam ratione sequi. Recusandae sint eveniet delectus dolorem, sed quasi aliquid itaque deserunt beatae saepe hic libero assumenda!</p>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default WhyUs;