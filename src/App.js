import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { Component, createContext, useContext } from 'react';
import Prac from "./components/Practice/Prac";
import Student from "./components/Practice/Student";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

import Map from "./components/JourneyPlanning/Map";
import About from "./components/About/About";

import Blog from "./components/Blog/Blog";
import Dashboard from './components/Dashboard/Dashboard';
import QuestionAnswer from './components/QA/QuestionAnswer';
import DashBoardLogin from './components/DashBoardLogin/DashBoardLogin';
import DatePicker from './components/JourneyPlanning/DatePicker';


export const AppContext = createContext();


function App() {
  const [user, setUser] = useState({});


  //登出狀態 監聽
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //判斷地圖進入
  const [openMap, setOpenMap] = useState(false);



  //判斷後台和後台登入
  const location = useLocation();

  const isdashboardRendering = (location.pathname === "/dashboard" || location.pathname === "/dashboardlogin");

  const [isadmin, setIsAdmin] = useState(true);


  return (
    <AppContext.Provider value={{ user }}>
      <div className="App">



        {!isdashboardRendering && <ScrollTop />}

        {!isdashboardRendering && (user ? <Navbar user={user} /> : <NavbarGuest user={user} />)}

        <Routes>
          {/* need write route */}
          <Route path="*" element={<PageNF />} />
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<QuestionAnswer />} />

          <Route path="/blog" element={<Blog />} />
          {user && <Route path="/profile" element={<Profile3 />} />}

          {user && <Route path="/favorite" element={<Favorite />} />}
          {user && <Route path="/journeyplanhome" element={<JourneyHome openMap={openMap} setOpenMap={setOpenMap} />} />}

          {user && <Route path="/map" element={<Map />} />}

          <Route path="/dashboardlogin" element={<DashBoardLogin />} />
          {isadmin && <Route path="/dashboard" element={<Dashboard />} />}
        </Routes>
        {!isdashboardRendering && <Footer />}


      </div>
    </AppContext.Provider>
  );
}
{
  /* <Prac /> */
}
export default App;


