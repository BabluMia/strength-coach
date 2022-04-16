import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
    const [user] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const handleGoogle = () => {
    signInWithGoogle();
  };
  const handleFacebook = () => {
    signInWithFacebook();
  };
  const handleGithub = () => {
    signInWithGithub();
  };
    return (
        
    <div className="form-body">
    <div className="container-main-form " id="container">
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Sign Up</h1>
          <div className="social-container">
            <RiFacebookCircleLine
              className="social"
              onClick={handleFacebook}
            ></RiFacebookCircleLine>
            <BsGithub className="social" onClick={handleGithub}></BsGithub>
            <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
          </div>
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