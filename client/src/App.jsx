import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    
   <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <Navbar />
        <div className="max-w-7xl mx-auto">  
          <main className="pt-20">  {/* ← Add top padding for navbar */}
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  {/* <Experience /> */}
                  <Contact />
                </>
              } />
            </Routes>
          </main>
        </div>
              <Footer />
      </div>
    </Router>
  );
}

export default App;
