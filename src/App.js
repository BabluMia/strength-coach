import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from '../src/Components/Home/Home'
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import AboutMe from "./Components/AboutMe/AboutMe";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
