import React from 'react';
import './loginStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    return (
        <div className="container-login">
            <div className="left">
            </div>

            <div className="right">
                {/* <div className="design one"></div> */}
                <div className="text">
                    <h1>Welcome to SingPost</h1>
                    <div className="credentials">
                        <input type="text" id="username" placeholder="Enter your username"/>
                        <input type="password" id="password" placeholder="Enter your password"/>
                        <button>Click here to sign in</button>
                    </div>
                </div>
                <div className="design two"></div>
            </div>
        </div>
    )
}

export default Login;