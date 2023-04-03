import { Link } from "react-router-dom";


export const Register = () => {



    return (

        <div className="form-wrap">
            <div className="tabs">
                <h3 className="signup-tab">Register</h3>
            </div>

            <div className="tabs-content">
                <div id="signup-tab-content" className="active">
                    <form className="signup-form" action="" method="post">
                        <input type="email" className="input" id="user_email" autocomplete="off" placeholder="Email" />
                        <input type="text" className="input" id="user_name" autocomplete="off" placeholder="Username" />
                        <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password" />
                        <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Confirm password" />


                        <div class="gender">
                            <div className="gender-item">
                                <input type="radio" value="None" id="male" name="gender" />
                                <label htmlFor="male" className="radio" chec>Male</label>
                            </div>
                            <div class="gender-item">
                                <input type="radio" value="None" id="female" name="gender" />
                                <label htmlFor="female" className="radio">Female</label>
                            </div>
                            <div class="gender-item">
                                <input type="radio" value="None" id="other" name="gender" checked />
                                <label htmlFor="other" className="radio">Other</label>
                            </div>
                        </div>

                        <input type="submit" className="button" value="Register" />
                    </form>
                    <div className="help-text">
                        <p>By signing up, you agree to our</p>
                        <p><a href="https://circleci.com/legal/terms-of-use/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--emea-en-dsa-tROAS-auth-nb&utm_term=g_-_c__dsa_&utm_content=&gclid=CjwKCAjwrJ-hBhB7EiwAuyBVXcq6QAY6KuIlS0U55rnWS8aQ75Gne1LSbFzXwabfT6cSUo_lKTV9bBoCzhIQAvD_BwE">Terms of service</a></p>
                    </div>
                    <hr></hr>
                    <div className="help-text">
                        <p><a href="/login">You already have an account?</a></p>
                    </div>
                </div>


            </div>
        </div>


    );
};


{/* <section className="vh-100" style={{ backgroundColor: "#eee" }}>
<div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                            <form className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password"
                                            id="bb"
                                            className="form-control"
                                        />



                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                    </div>

                                </div>

                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        I agree all statements in <a href="https://www.legalnature.com/guides/why-your-website-needs-a-strong-terms-of-use-agreement-and-what-to-include#what-is-a-terms-of-use">Terms of service</a>
                                    </label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-5">
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        You are already registrated? <Link to="/login">Click here</Link>
                                    </label>
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" className="get-started-btn scrollto">Register</button>
                                </div>

                            </form>

                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="/assets/img/car_drawing_register.jpg"
                                className="img-fluid" alt="Sample image" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}