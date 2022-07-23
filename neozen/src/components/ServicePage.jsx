import React from 'react'
import Footer from './NewFooter'

export default function ServicePage() {
  return (
    <>
    <div class="container-fluid bg-primary py-5 bg-header" style={{marginbottom: "90px"}}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Services</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">Services</a>
                </div>
            </div>
        </div>
       <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{minheight: "400px"}}
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/Aboutimg.png"
                alt=""
                style={{objectfit: "cover"}}
              />
              <div
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                style={{width: "200px", height: "200px"}}
              >
                <div
                  className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3"
                >
                  <h1 className="text-white">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-0">
                  Unique Solutions For Residentials & Industries!
                </h1>
              </div>
              <p>
              From planning and implementation to analytics and maintenance, Our technical experts can help your business become agile, sustainable and secure.
              Challenging journeys aren’t taken alone. Navigating the roadmap for digital transformation is thought-provoking.
              We can help you prioritize your craved outcomes, determine your best first steps for adoption, and support your integration ambition.
              </p>
              <p className="mb-4">
              We help businesses build, deploy and manage the systems and technologies that sustain substantive connections any time, virtually anywhere.
              Rely on the expertise of our consultants to develop strategies that drive the outcome. From design and implementation to analytics and maintenance, our support teams can help accelerate your business.
              The right solutions can drive efficiencies and grow your business.
              </p>
              <div className="border-top mt-4 pt-4">
                <div className="row g-4">
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">
                    <i
                      className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                    ></i>
                    <h6 className="mb-0">Ontime at services</h6>
                  </div>
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.3s">
                    <i
                      className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                    ></i>
                    <h6 className="mb-0">24/7 hours services</h6>
                  </div>
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.5s">
                    <i
                      className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"
                    ></i>
                    <h6 className="mb-0">Verified professionals</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <Footer/>
    </>
  )
}
