// import { Link } from "react-router-dom";

// import { useAuthContext } from "../../contexts/AuthContext";
// import { useForm } from "../../hooks/useForm";

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password'
// };

// export const Login = ({
//     auth,
// }) => {
//     // const { onLoginSubmit } = auth;
//     const { onLoginSubmit } = useAuthContext();
//     const { values, changeHandler, onSubmit } = useForm({
//         [LoginFormKeys.Email]: '',
//         [LoginFormKeys.Password]: '',
//     }, onLoginSubmit);

//     return (
//         <section id="login-page" className="auth">
//             <form id="login" method="POST" onSubmit={onSubmit}>
//                 <div className="container">
//                     <div className="brand-logo"></div>
//                     <h1>Login</h1>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Sokka@gmail.com"
//                         name={LoginFormKeys.Email}
//                         value={values[LoginFormKeys.Email]}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="login-pass">Password:</label>
//                     <input
//                         type="password"
//                         id="login-password"
//                         name={LoginFormKeys.Password}
//                         value={values[LoginFormKeys.Password]}
//                         onChange={changeHandler}
//                     />
//                     <input type="submit" className="btn submit" value="Login" />
//                     <p className="field">
//                         <span>If you don't have profile click <Link to="/register">here</Link></span>
//                     </p>
//                 </div>
//             </form>
//         </section>
//     );
// }

// export default withAuth(Login);


export const Login = () => {

    return (
        <div className="form-wrap">
            <div className="tabs">
                <h3 >Login</h3>

            </div>

            <div className="tabs-content">

                <div id="login-tab-content">
                    <form className="login-form" action="" method="post">
                        <input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username" />
                        <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password" />
                        <input type="checkbox" className="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>

                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="help-text">
                        <hr></hr>
                        <p><a href="/register">You don't have an account yet?</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
}