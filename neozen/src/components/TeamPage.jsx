import React from 'react'

export default function TeamPage() {
  return (
    <>
     {/* <!-- Team Start --> */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-primary">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    {/* <!-- Vendor Start --> */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                    <img src="img/vendor-1.jpg" alt=""/>
                    <img src="img/vendor-2.jpg" alt=""/>
                    <img src="img/vendor-3.jpg" alt=""/>
                    <img src="img/vendor-4.jpg" alt=""/>
                    <img src="img/vendor-5.jpg" alt=""/>
                    <img src="img/vendor-6.jpg" alt=""/>
                    <img src="img/vendor-7.jpg" alt=""/>
                    <img src="img/vendor-8.jpg" alt=""/>
                    <img src="img/vendor-9.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Vendor End --> */}
    </>
  )
}
