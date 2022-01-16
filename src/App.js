
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Appbar from './components/Practice/Appbar';
import Prac from './components/Practice/Prac';
import Student from './components/Practice/Student';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import Map from './components/JourneyPlanning/Map';
import ScrollTop from './components/Homepage/ScrollTop';
import Favorite from './components/Favorite/Favorite';
import Test from './components/Practice/Bootstrap';
import Dashboard from './components/Dashboard/Dashboard';
import Github from './components/Dashboard/Github';

function App() {
  const location=useLocation()
  console.log(location);
  const isdashboardRendering = location.pathname==="/dashboard" || "/members" || "reports" || "employee"
  return (
    <div className="App">

      {/* <BrowserRouter> */}
      {!isdashboardRendering && <ScrollTop  />}
      {!isdashboardRendering && <Navbar />}
       
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/journeyplanning" element={<Map />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/github" element={<Github />} />
        </Routes>
       
        {!isdashboardRendering && <Footer />}
       {/*  <Footer /> */}

      {/* </BrowserRouter> */}
    </div >
  );
}
{/* <Prac /> */ }
export default App;
