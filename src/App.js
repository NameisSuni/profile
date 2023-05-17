import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import About from './Components/Details/About';
import { Resume } from './Components/Details/Resume';
import { Portfolio } from './Components/Details/Portfolio';
import { Blog } from './Components/Details/Blog';
import { Contact } from './Components/Details/Contact';

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
