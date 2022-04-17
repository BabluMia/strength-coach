import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  let errorElem;
  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (error1) {
    errorElem = (
      <div>
        <p>Error: {error1.message}</p>
      </div>
    );
  }

  const handleFacebook = () => {
    signInWithFacebook();
  };
  if (error2) {
    errorElem = (
      <div>
        <p>Error: {error2.message}</p>
      </div>
    );
  }
  const handleGithub = () => {
    signInWithGithub();
    
  };
  if (error3) {
    errorElem = (
      <div>
        <p>Error: {error3.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }

  return (
    <>
      <div className="social-container">
        <RiFacebookCircleLine
          className="social"
          onClick={handleFacebook}
        ></RiFacebookCircleLine>
        <BsGithub className="social" onClick={handleGithub}></BsGithub>
        <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
      </div>
      {errorElem}
    </>
  );
};

export default SocialLogin;
