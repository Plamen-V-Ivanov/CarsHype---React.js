export const Main = () => {
    return (
    
        <main id="main">

        {/* <!-- ======= About Section ======= --> */}
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
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">

            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="image col-lg-6" style={{backgroundImage: 'url("assets/img/features.jpg")'}} data-aos="fade-right"></div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-receipt"></i>
                  <h4>Est labore ad</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Harum esse qui</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-images"></i>
                  <h4>Aut occaecati</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-shield"></i>
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><a href="">Lorem Ipsum</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href="">Sed ut perspiciatis</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><a href="">Magni Dolores</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4><a href="">Nemo Enim</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-slideshow"></i></div>
                  <h4><a href="">Dele cardo</a></h4>
                  <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-arch"></i></div>
                  <h4><a href="">Divera don</a></h4>
                  <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">

            <div className="text-center">
              <h3>Call To Action</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a className="cta-btn" href="#0">Call To Action</a>
            </div>

          </div>
        </section>
        {/* <!-- End Cta Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check our Portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">

            <div className="row no-gutters">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
              <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                <div className="content d-flex flex-column justify-content-center">
                  <h3>Voluptatem dignissimos provident quasi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                        <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock"></i>
                        <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="4" className="purecounter"></span>
                        <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="4" className="purecounter"></span>
                        <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Team</h2>
              <p>Check our Team</p>
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>

            <div>
              {/* <iframe style={{...{border:"0"}, ...{width: "100%"}, ...{height: "270px"}}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe> */}
              {/* <iframe style={"border:0; width: 100%; height: 270px;"} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
            </div>

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>

              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      /* <!-- End #main --> */
    );
}