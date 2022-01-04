
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Appbar from './components/Practice/Appbar';
import Prac from './components/Practice/Prac';
import Student from './components/Practice/Student';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import Map from './components/JourneyPlanning/Map';
import ScrollTop from './components/Homepage/ScrollTop';
import Favorite from './components/Favorite/Favorite';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollTop />
        <Navbar />

        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/journeyplanning" element={<Map />} />
        </Routes>


        <Footer />

      </BrowserRouter>
    </div >
  );
}
{/* <Prac /> */ }
export default App;
