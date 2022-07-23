import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white mb-4">
              Neozen
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-primary me-1" href=""
                ><i className="fab fa-twitter"></i
              ></a>
              <a className="btn btn-square btn-outline-primary me-1" href=""
                ><i className="fab fa-facebook-f"></i
              ></a>
              <a className="btn btn-square btn-outline-primary me-1" href=""
                ><i className="fab fa-youtube"></i
              ></a>
              <a className="btn btn-square btn-outline-primary me-0" href=""
                ><i className="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>201-202 Midas Sahar plaza, Andheri Kurla Road, Bhim Nagar, Andheri East. Mumbai Maharashtra 400053.
            </p>
            <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <NavLink to="/aboutus" className="btn btn-link" href="">About us</NavLink>
            <NavLink to="/service" className="btn btn-link" href="">Services</NavLink>
            <NavLink to="support" className="btn btn-link" href="">Support</NavLink>
            <NavLink to="contactus" className="btn btn-link" href="">Contact us</NavLink>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{maxwidth: "400px"}}>
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i class="bi bi-arrow-up"></i
    ></a>
    </>
  )
}
