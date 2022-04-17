import React from 'react';
import { Link} from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
   
    return (
        
    <div className="form-body">
    <div className="container-main-form " id="container">
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Sign Up</h1>
          <SocialLogin/>
          <span>or create your account</span>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          {/* <a href="#">Forgot your password?</a> */}
          <button>Sign up</button>
          <p>
            Already have an acount{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right"></div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Register;