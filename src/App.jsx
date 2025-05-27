import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Logos />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;