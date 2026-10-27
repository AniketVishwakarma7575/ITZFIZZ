import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from './Header.jsx';
import Car from './Car.jsx';
import StatCard from './StatCard.jsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);
const stats = [
  { value: '98%', description: 'of customers recommend us', className: 'card-one' },
  { value: '4.9/5', description: 'average customer satisfaction', className: 'card-two' },
  { value: '2.4×', description: 'faster campaign turnaround', className: 'card-three' },
  { value: '85%', description: 'repeat customer engagement', className: 'card-four' },
];

export default function HeroSection() {
  const root = useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const letters = gsap.utils.toArray('.headline-char');
    const car = root.current.querySelector('.car-track');
    const mobile = window.matchMedia('(max-width: 700px)').matches;
    const carTravel = () => window.innerWidth - car.offsetWidth - car.offsetLeft - (mobile ? 16 : 40);
    const trailScale = () => (window.innerWidth - car.offsetWidth - (mobile ? 16 : 40)) / window.innerWidth;
    if (reduced) {
      gsap.set(['.stat-card', '.headline-char'], { opacity: 1, y: 0, scale: 1, color: '#202321' });
      gsap.set(car, { x: carTravel, yPercent: -50 });
      gsap.set('.trail-fill', { scaleX: trailScale });
      return;
    }
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 701px)', mobile: '(max-width: 700px)' }, (context) => {
      const cards = gsap.utils.toArray('.stat-card', root.current);
      const isMobile = context.conditions.mobile;
      const travel = () => window.innerWidth - car.offsetWidth - car.offsetLeft - (isMobile ? 16 : 40);
      const trail = () => (window.innerWidth - car.offsetWidth - (isMobile ? 16 : 40)) / window.innerWidth;
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: {
        trigger: root.current, start: 'top top', end: () => `+=${Math.round(window.innerHeight * (isMobile ? 2.15 : 2.65))}`,
        scrub: 0.8, pin: true, anticipatePin: 1, invalidateOnRefresh: true,
      }});
      gsap.set(car, { yPercent: -50 });
      gsap.set(letters, { color: '#aeb2ad' });
      gsap.set(cards, { autoAlpha: 0, y: 22, scale: .96 });
      tl.to(car, { x: travel, duration: 1 }, 0)
        .to('.trail-fill', { scaleX: trail, duration: 1 }, 0)
        .to(letters, { color: '#202321', stagger: { each: .035 }, duration: .5 }, .08)
        .to(cards[0], { autoAlpha: 1, y: 0, scale: 1, duration: .18 }, .2)
        .to(cards[1], { autoAlpha: 1, y: 0, scale: 1, duration: .18 }, .42)
        .to(cards[2], { autoAlpha: 1, y: 0, scale: 1, duration: .18 }, .62)
        .to(cards[3], { autoAlpha: 1, y: 0, scale: 1, duration: .18 }, .8);
      return () => { tl.scrollTrigger?.kill(); tl.kill(); };
    });
    return () => mm.revert();
  }, { scope: root });

  return <section className="hero" id="top" ref={root} aria-label="ITZFIZZ introduction">
    <Header />
    <div className="hero-copy">
      <p className="eyebrow"><span /> BUILT FOR WHAT’S NEXT</p>
      <h1 aria-label="Welcome ITZFIZZ">{Array.from('WELCOME ITZFIZZ').map((char, i) => <span className="headline-char" key={i}>{char === ' ' ? '\u00a0' : char}</span>)}</h1>
      <p className="hero-description">We turn bold ideas into meaningful experiences<br className="desktop-break" /> that move people and businesses forward.</p>
    </div>
    <div className="road" aria-hidden="true">
      <div className="road-centerline" />
      <div className="trail-fill" />
      <div className="car-track"><Car /></div>
    </div>
    <div className="stats" aria-label="Example agency statistics">
      {stats.map((stat) => <StatCard key={stat.value} {...stat} />)}
      <p className="stats-note">Illustrative figures</p>
    </div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE <b>↓</b></span><span>STRATEGY · DESIGN · DIGITAL</span></div>
  </section>;
}
