import React from 'react'

export default function Features() {
  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 className="mb-0">WHY CHOOSE NUOZEN FOR BUSINESS ?</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Dedicated Technical Team</h4>
                            <p className="mb-0">All our solutions are designed just for you. We will send our experienced engineer to you</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4>Designed For Business</h4>
                            <p className="mb-0">Assurance of best-fit solutions for your business and network infrastructure ongoing support 24*7*365 days</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minheight: "350px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{objectfit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Startegic Communications</h4>
                            <p className="mb-0">With the right communications strategy & tools, scale communications and improve customer experiences.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>Enhance Your Network</h4>
                            <p className="mb-0">Achieve better security, more reliable performance and flexible, cost-efficient Internet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
