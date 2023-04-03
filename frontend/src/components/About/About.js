export const About = () => {
    return (

        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="assets/img/car_concept.webp" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                        <h3>Tuned cars all over the world.</h3>
                        <p className="fst-italic">
                            The car is one of the most fascinating devices that a person can own.
                            A car contains dozens of different technologies. Everything from the engine to the tires is its own special universe of design and engineering.
                            Our goal is to collect tuned car projects from abroad.
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i> See what is up there.</li>
                            <li><i className="ri-check-double-line"></i> Share a project you like.</li>
                            <li><i className="ri-check-double-line"></i> Share a article.</li>
                            <li><i className="ri-check-double-line"></i> Discuss with other users project you are interested in.</li>
                        </ul>
                        <p>
                            What is the most exciting project you want to share with us?
                        </p>
                    </div>
                </div>

            </div>

            <footer id="footer-about">

                <div className="footer-about-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-about-info">
                                    <h3>Tuned Cars<span>Fanbase</span></h3>
                                    <p>
                                        A108 Adam Street <br></br>
                                        NY 535022, USA<br></br><br></br>
                                        <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                        <strong>Email:</strong> info@example.com<br></br>
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#0" className="twitter"><i className="bx bxl-twitter"></i></a>
                                        <a href="#0" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="#0" className="instagram"><i className="bx bxl-instagram"></i></a>
                                        <a href="#0" className="google-plus"><i className="bx bxl-skype"></i></a>
                                        <a href="#0" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-6 footer-about-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-about-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#0">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-about-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </section>

    );
}