import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/AboutMePage/About/About';
import Blog from './components/BlogPage/Blog/Blog';
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';
import HondaCBR from './components/ProjectPage/HondaCBR/HondaCBR';
import SkillHub from './components/ProjectPage/SkillHub/SkillHub';
import MentalMessage from './components/ProjectPage/MentalMessage/MentalMessage';
import MartialArt from './components/ProjectPage/MartialArt/MartialArt';
import OculusProject from './components/ProjectPage/OculusProject/OculusProject';
import TourPackage from './components/ProjectPage/TourPackage/TourPackage';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/oculus-project" element={<OculusProject />} />
          <Route path="/honda-cbr" element={<HondaCBR />} />
          <Route path="/martial-art" element={< MartialArt />} />
          <Route path="/tour-package" element={<TourPackage />} />
          <Route path="/skill-hub" element={<SkillHub />} />
          <Route path="/mental-message" element={<MentalMessage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
