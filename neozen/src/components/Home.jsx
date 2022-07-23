import React from 'react'
import Service from "./Service";
import NewFooter from "./NewFooter"
import About from "./About"
import { NavLink } from 'react-router-dom';
import Features from './Features';
import NewServices from "./NewServices"
import Support from './Support';

export default function Home() {
  return (
    <>
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/NeozenCarousel1.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h3 className="display-1 text-white mb-md-4 animated zoomIn">Accelerate Your BusinessWith Nuozen Internet</h3>
                            <NavLink to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</NavLink>
                            <NavLink to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/NeozenCarousel2.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h3 className="display-1 text-white mb-md-4 animated zoomIn">Outstanding Reliability FromThe Ultimate Internet Connection</h3>
                            {/* <NavLink to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</NavLink>
                            <NavLink to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</NavLink> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/NeozenCarousel3.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h3 className="display-1 text-white mb-md-4 animated zoomIn">Boost Your Business WithNuozen Internet Connection</h3>
                            {/* <NavLink to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</NavLink>
                            <NavLink to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</NavLink> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/NeozenCarousel4.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Empowers Productivity & ProfitWith Nuozen Internet </h1>
                            {/* <NavLink to="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</NavLink>
                            <NavLink to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* <!-- Team Start -->///////// */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                <h1 className="mb-0">NUOZEN ESCALATION MATRIX</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Jayesh Sonawane</h4>
                            <p className="text-uppercase m-0">Helpdesk</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Rasika Parkar</h4>
                            <p className="text-uppercase m-0">Network Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Pradip Vaste</h4>
                            <p className="text-uppercase m-0">Technical Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix4.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Aashish Yadav</h4>
                            <p className="text-uppercase m-0">CEO & Directorr</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix5.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Rameshchandra Yadav</h4>
                            <p className="text-uppercase m-0">Chairman & Managing Director</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/NeozenMatrix5.jpg" alt=""/>
                            <div className="team-social">
                                <h1 className='btn'>From 0 to 15 minutes of downtime</h1>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Rameshchandra Yadav</h4>
                            <p className="text-uppercase m-0">Chairman & Managing Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}

        <Support/>
        <About/>
        <Service/>
        <Features/>
        <NewServices/>
        <NewFooter/>
    </>
  )
}
