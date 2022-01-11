
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Appbar from './components/Practice/Appbar';
import Prac from './components/Practice/Prac';
import Student from './components/Practice/Student';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';

import ScrollTop from './components/Homepage/ScrollTop';
import Favorite from './components/Favorite/Favorite';
import Journeyplan from './components/JourneyPlan/JourneyPlan';
import PageNF from './PageNF';
import Login from './components/Login/Login';


import NavbarGuest from './components/Navbar/NavbarGuest';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase-config';
import { useEffect, useState } from 'react';
import Register from './components/Login/Register';
import Profile3 from './components/Profile/Profile3';


function App() {
  const [user, setUser] = useState({});


  //登出狀態 監聽
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })



  return (
    <div className="App">

      <BrowserRouter>
        <ScrollTop />


        {user ? <Navbar user={user} /> : (<NavbarGuest user={user} />)}


        <Routes>
          <Route path="*" element={<PageNF />} />
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile3 />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/journeyplan" element={<Journeyplan />} />

        </Routes>
        <Footer />





      </BrowserRouter>

    </div >
  );
}
{/* <Prac /> */ }
export default App;
