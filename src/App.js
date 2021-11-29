import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
