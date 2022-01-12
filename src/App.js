
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
import Test from './components/Practice/Bootstrap';
import About from './components/About/About';
import QA from './components/QA/QA';
import Blog from './components/Blog/Blog';

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
          <Route path="/test" element={<Test />} />
          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<QA/>} /> 
          <Route path="/blog" element={<Blog/>} />
        </Routes>


        <Footer />

      </BrowserRouter>
    </div >
  );
}
{/* <Prac /> */ }
export default App;
