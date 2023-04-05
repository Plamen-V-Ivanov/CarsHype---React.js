import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";


export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        username: '',
        confirmPassword: '',
        gender: '',
    }, onRegisterSubmit);


    return (

        <div className="form-wrap">
            <div className="tabs">
                <h3 className="signup-tab">Register</h3>
            </div>

            <div className="tabs-content">
                <div id="signup-tab-content" className="active">
                    <form className="signup-form" action="" method="post" onSubmit={onSubmit}>
                        <input type="email"
                            className="input"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Email"
                            value={values.email}
                            onChange={changeHandler}
                        />

                        <input type="text"
                            className="input"
                            id="username"
                            name="username"
                            autoComplete="off"
                            placeholder="Username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                        <input type="password" 
                        className="input" 
                        id="register-password"
                        name="password"
                        autoComplete="off" 
                        placeholder="Password" 
                        value={values.password}
                        onChange={changeHandler}
                        />
                        <input type="password" 
                        className="input" 
                        id="confirm-password"
                        name="confirmPassword"
                        autoComplete="off" 
                        placeholder="Confirm Password" 
                        value={values.confirmPassword}
                        onChange={changeHandler}
                        />


                        <div className="gender">
                            <div className="gender-item">
                                <input type="radio" 
                                id="male" 
                                name="gender" 
                                value={values.gender}
                                onChange={changeHandler}
                                />
                                <label htmlFor="male" className="radio" >Male</label>
                            </div>
                            <div className="gender-item">
                                <input type="radio" 
                                id="female" 
                                name="gender"
                                value={values.gender}
                                onChange={changeHandler}
                                />
                                <label htmlFor="female" className="radio">Female</label>
                            </div>
                            <div className="gender-item">
                                <input type="radio" 
                                id="other" 
                                name="gender"
                                value={values.gender}
                                onChange={changeHandler}               
                                defaultChecked 
                                />
                                <label htmlFor="other" className="radio" >Other</label>
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
                        <p><Link to="/login">You already have an account? </Link></p>
                    </div>
                </div>


            </div>
        </div>


    );
};


