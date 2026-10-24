import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import StrengthsInterests from './components/StrengthsInterests';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Lazy-load the heavy 3D WebGL scene to optimize initial page performance
const ImmersiveScene = lazy(() => import('./components/3d/ImmersiveScene'));

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Persistent 3D Interactive WebGL Scene */}
      <Suspense
        fallback={
          <div className="webgl-fallback-bg" aria-hidden="true">
            <div className="cyber-ambient-orb orb-1"></div>
            <div className="cyber-ambient-orb orb-2"></div>
          </div>
        }
      >
        <ImmersiveScene />
      </Suspense>

      {/* Main Navigation */}
      <Navbar />

      {/* Primary Section Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <StrengthsInterests />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
