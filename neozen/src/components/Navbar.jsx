import React from 'react'
import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <NavLink to="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><img src='http://nuozen.net/wp-content/uploads/2018/09/logo-new.png'/></h1>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                    <NavLink to="/support" className="nav-item nav-link">Support</NavLink>
                    <NavLink to="/contactus" className="nav-item nav-link">Contact us</NavLink>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}
