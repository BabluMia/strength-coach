// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW_AVPqgctHW92eqZhrEmGJ0qqLBp2kyQ",
  authDomain: "assignment-10-ad65f.firebaseapp.com",
  projectId: "assignment-10-ad65f",
  storageBucket: "assignment-10-ad65f.appspot.com",
  messagingSenderId: "554660428829",
  appId: "1:554660428829:web:6872fd248d65c0db255af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;