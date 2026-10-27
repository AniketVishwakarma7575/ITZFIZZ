import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return <>
    <main><HeroSection />
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="eyebrow"><span /> GOOD THINGS START HERE</p>
          <h2>Make every<br />interaction count.</h2>
          <p className="contact-copy">Strategy, design, and digital experiences with a little more thought behind every detail. Let’s make something that moves people.</p>
          <a className="contact-link" href="mailto:hello@itzfizz.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
