import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
    Gender: 'gender'
};




export const Login = ({ }) => {
    // const { onLoginSubmit } = auth;
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);
    return (
        <div className="form-wrap">
            <div className="tabs">
                <h3 >Login</h3>

            </div>

            <div className="tabs-content">

                <div id="login-tab-content">
                    <form className="login-form" action="" method="post" onSubmit={onSubmit}>
                        <input type="email"
                            className="input"
                            id="email"
                            autoComplete="off"
                            placeholder="Email or Username"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}
                        />
                        <input type="password"
                            className="input"
                            id="user_pass"
                            autoComplete="off"
                            placeholder="Password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                        />
                        <input type="checkbox"
                            className="checkbox"
                            id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>

                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="help-text">
                        <hr></hr>
                        <p><Link to="/register">You don't have an account yet?</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
}