import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gap from './components/Gap';
import Services from './components/Services';
import Nucleo from './components/Nucleo';
import Audiences from './components/Audiences';
import Nosotros from './components/Nosotros';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gap />
        <Services />
        <Nucleo />
        <Audiences />
        <Nosotros />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
