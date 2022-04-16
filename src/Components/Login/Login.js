import "./Login.css";
import React, { useEffect } from "react";
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

const Login = () => {
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
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>
            <div className="social-container">
              <RiFacebookCircleLine
                className="social"
                onClick={handleFacebook}
              ></RiFacebookCircleLine>
              <BsGithub className="social" onClick={handleGithub}></BsGithub>
              <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <a href="#">Forgot your password?</a> */}
            <button>Log In</button>
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
