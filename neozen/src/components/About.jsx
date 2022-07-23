import React from 'react'

export default function About() {
  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                    </div>
                    <p className="mb-4">Nuozen is an Internet Service Provider (ISP), with state-of-the-art technology. We are committed to provide Internet and other related value-added services to our customer. Nuozen is a forward looking organization that has driven changes in this industry by taking the lead in supplying affordable leased line Internet services to our users. A panel of tech experts at Nuozen are magnificent advisers and are available 24*7 to respond to your queries and provide a quick fix at the earliest. Nuozen is devoted to become the Network Industry’s best partner in providing flexible networking and storage-based solutions that address the requirements of the public as well as private sectors. We provide leased-line Internet with assured performance and reliability. We at Nuozen have a spotlight on creating a long-term relationship by delivering world-class standard of services and consistently improving the value of our services for our clients. Nuozen consistently invests in expanding its network so that we can provide high quality and cost-effective connectivity option over decades.</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" style={{minheight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src='img/about_img.jpg' style={{objectfit: "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
