import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        
        signInUsingGoogle()
            .then(result => {
                
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input className="password" type="password" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p className="new">New to Road Bolt? <Link to="/register">Create New Account</Link></p>
                <div>---------or------------</div> <br/>
                <button
                    className="btn"
                    onClick={handleGoogleLogin}
                >Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;