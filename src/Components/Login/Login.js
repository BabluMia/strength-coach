import "./Login.css";
import React, { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Login = () => {
  const [user] = useAuthState(auth)
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    
  };
  
  
  if (error) {
    errorElement = (
      <div>
        <p className="my-2">Error: {error?.message}</p>
      </div>
    );
  }
  

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent reset email");
  };
  
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container log-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <SocialLogin />
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <p>
              Forget Password ?{" "}
              <Link
                className="text-primary text-decoration-none pe-auto"
                to="/"
                onClick={resetPassword}
              >
                Reset
              </Link>
            </p>
            {errorElement}
            {/* <a href="#">Forgot your password?</a> */}
            <button type="submit">Log In</button>
            <p>
              New Here{" "}
              <span>
                <Link to="/register">Register</Link>
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

export default Login;

// import {
//     useSignInWithGithub,
//     useSignInWithGoogle,
//     useSignInWithFacebook,
//     useAuthState,
//   } from "react-firebase-hooks/auth";
//   import auth from "../src/firebase.init";

// const [user] = useAuthState(auth);
// const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
// const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
// const [signInWithFacebook, user3, loading3, error3] =
//   useSignInWithFacebook(auth);
// const handleGoogle = () => {
//   signInWithGoogle();
// };
// const handleFacebook = () => {
//   signInWithFacebook();
// };
// const handleGithub = () => {
//   signInWithGithub();
// };

//   <h2 className="text-center text-primary">hlw there</h2>
//       <button className="d-block btn btn-primary" onClick={handleGoogle}>
//         Google
//       </button>
//       <button className="d-block btn btn-primary my-4" onClick={handleFacebook}>
//         facebook
//       </button>
//       <button className="d-block btn btn-primary" onClick={handleGithub}>
//         github
//       </button>
