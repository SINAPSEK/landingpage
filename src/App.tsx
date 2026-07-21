import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gap from './components/Gap';
import Services from './components/Services';
import Audiences from './components/Audiences';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
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
        <Audiences />
        <Process />
        <WhyUs />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
