import { siteConfig } from './config';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import VideoSection from './sections/VideoSection';
import Products from './sections/Products';
import Features from './sections/Features';
import Blog from './sections/Blog';
import FAQ from './sections/FAQ';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
      <Navigation />
      <main>
        <Hero />
        <SubHero />
        <VideoSection />
        <Products />
        <Features />
        <Blog />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
