import React from 'react';


function Footer() {
  return (

    <footer className="text-center text-white text-lg-start bg-dark text-muted">
        <section className="d-flex justify-content-center justify-content-lg-center p-4 border-bottom">
            <div>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="me-4 link-light">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>

        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase text-light fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-white"></i>Company name
                </h6>
                <p className='text-light'>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-light">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-light">React</a>
                </p>
                <p>
                    <a href="#!" className="text-light">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-light">Laravel</a>
                </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-light">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-light">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-light">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-light">Help</a>
                </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                <p className='text-light'><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p className='text-light'><i className="fas fa-envelope me-3 "></i>info@example.com</p>
                <p className='text-light'><i className="fas fa-phone me-3 "></i> + 01 234 567 88</p>
                <p className='text-light'><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>

        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}}>
            <a className="text-light fw-bold" href="">MDBootstrap.com</a>
        </div>
    </footer>

  );
}

export default Footer;