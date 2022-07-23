import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './NewFooter'

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <div class="container-fluid bg-primary py-5 bg-header" style={{marginbottom: "90px"}}>
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">About Us</h1>
                    <NavLink to="/" class="h5 text-white">Home</NavLink>
                    <i class="far fa-circle text-white px-2"></i>
                    <NavLink to="/about" class="h5 text-white">About</NavLink>
                </div>
            </div>
        </div>
     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p className="mb-4">Nuozen is an Internet Service Provider (ISP), with state-of-the-art technology. We are committed to provide Internet and other related value-added services to our customer. Nuozen is a forward looking organization that has driven changes in this industry by taking the lead in supplying affordable leased line Internet services to our users. A panel of tech experts at Nuozen are magnificent advisers and are available 24*7 to respond to your queries and provide a quick fix at the earliest. Nuozen is devoted to become the Network Industry’s best partner in providing flexible networking and storage-based solutions that address the requirements of the public as well as private sectors. We provide leased-line Internet with assured performance and reliability. We at Nuozen have a spotlight on creating a long-term relationship by delivering world-class standard of services and consistently improving the value of our services for our clients. Nuozen consistently invests in expanding its network so that we can provide high quality and cost-effective connectivity option over decades.</p>
                </div>
                <div className="col-lg-5" style={{minheight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about_img.jpg" style={{objectfit: "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    {/* <!-- About End --> */}

    
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxwidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">WHY CHOOSE LEASED LINE FROM NUOZEN ?</h5>
            </div>      
            <div className="row g-5">
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <img src='/img/Safe-and-Secure.png' />
                        </div>
                        <h4 className="mb-3">Safe and Secure</h4>
                        <p className="m-0">Quality is remembered long after the price is forgotten. Our pledge to invest in the best technology and build our network capacity before demand will ensure the optimum performance of your internet.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <img src='/img/flexibility.png' />
                        </div>
                        <h4 className="mb-3">Flexibility</h4>
                        <p className="m-0">Developing plentiful solutions and services that are flexible which can be personalized with no limitations, which are business needs. Operation customized bandwidth performance is also provided with speed, time, schedule etc. suiting every customer’s needs.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <img src='/img/Reliability.png' />
                        </div>
                        <h4 className="mb-3">Reliability</h4>
                        <p className="m-0">You can always rely on Nuozen; Creativity isn’t worth a thing if it isn’t served with an equal amount of reliability. We are here to render you the best desirable and reliable customer experience for all our services.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <img src='/img/Support1.png' />
                        </div>
                        <h4 className="mb-3">24*7 Support</h4>
                        <p className="m-0">The Nuozen network is monitored 24 hours a day, 7 days a week, 365 days a year. We furnish proactive support & our technical alert system keeps us ahead of any problem.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <img src='/img/NeozenTheBest5.png' />
                        </div>
                        <h4 className="mb-3">Uptime 99.5%</h4>
                        <p className="m-0">Nuozen superfluous servers and BGP routing with multiple Tier-1 renders are hosted in a Tier-1 Data Centre to ensure your service continues non-stop.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                        <img src='img\valu-for-money.png' />
                        </div>
                        <h4 className="mb-3">Value For Money</h4>
                        <p className="m-0">Nuozen superfluous servers and BGP routing with multiple Tier-1 renders are hosted in a Tier-1 Data Centre to ensure your service continues non-stop.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>



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
    <Footer/>
    </>
  )
}
