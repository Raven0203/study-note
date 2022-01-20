import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { Component }  from 'react';
import Prac from "./components/Practice/Prac";
import Student from "./components/Practice/Student";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";

import ScrollTop from "./components/Homepage/ScrollTop";
import Favorite from "./components/Favorite/Favorite";

import PageNF from "./PageNF";
import Login from "./components/Login/Login";

import NavbarGuest from "./components/Navbar/NavbarGuest";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase-config";
import { useEffect, useState } from "react";
import Register from "./components/Login/Register";
import Profile3 from "./components/Profile/Profile3";
import JourneyHome from "./components/JourneyPlanning/JourneyHome";
import Test from "./Test/Test";
import Journeyplan from "./components/JourneyPlanning/JourneyPlan";
import Map from "./components/JourneyPlanning/Map";
import About from "./components/About/About";
import QuestionAnswer from "./components/QA/QuestionAnswer";
import Blog from "./components/Blog/Blog";
import BlogShow from "./components/Blog-show/BlogShow";
import BlogShow2 from "./components/Blog-show/BlogShow2";
import BlogShow3 from "./components/Blog-show/BlogShow3";
import BlogShow4 from "./components/Blog-show/BlogShow4";
import BlogShow5 from "./components/Blog-show/BlogShow5";
import Blogeditor from "./components/Blogeditor/Blogeditor";

function App() {
  const [user, setUser] = useState({});
  //後台登入判斷const [testopen, setTestOpen] = useState(false);

  //登出狀態 監聽
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <div className="App">


        <BrowserRouter>
          <ScrollTop />

          {user ? <Navbar user={user} /> : <NavbarGuest user={user} />}

          <Routes>
            {/* need write route */}
            <Route path="*" element={<PageNF />} />
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/about" element={<About/>} />
            <Route path="/qa" element={<QuestionAnswer/>} /> 
          
            <Route path="/blog" element={<Blog/>} />
            <Route path="/profile" element={<Profile3 />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/journeyplanhome" element={<JourneyHome />} />
            <Route path="/map" element={<Map />} />
            <Route path="/blogshow" element={<BlogShow />} />
            <Route path="/blogshow2" element={<BlogShow2 />} />
            <Route path="/blogshow3" element={<BlogShow3 />} />
            <Route path="/blogshow4" element={<BlogShow4 />} />
            <Route path="/blogshow5" element={<BlogShow5 />} />
            <Route path="/blogeditor" element={<Blogeditor />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>

      </div>
    </>
  );
}
{
  /* <Prac /> */
}
export default App;

//後臺邏輯判斷
// eslint-disable-next-line no-lone-blocks
{/* <div className="App">
      
      {testopen ? (
        <Test />
      ) : (
        <BrowserRouter>
          <ScrollTop />

          {user ? <Navbar user={user} /> : <NavbarGuest user={user} testopen={testopen} setTestOpen={setTestOpen}/>}

          <Routes>
            need write route
            <Route path="*" element={<PageNF />} />
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test/>}/>
            <Route path="/profile" element={<Profile3 />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/journeyplanhome" element={<JourneyHome />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div> */}
