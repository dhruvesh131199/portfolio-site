import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundimage from '../assets/background.jpg';
import Footer from '../components/Footer';

// ✅ All slides and video live in public/slides/
// Vite serves public/ as-is — no bundling, no memory issues, no crashes.
// Move your entire src/slides/ folder to public/slides/ in your file explorer.
const demoVideo = 'slides/aialertsdemo.mp4';
const slide01   = 'slides/slide01.png';
const slide02   = 'slides/slide02.png';
const slide03   = 'slides/slide03.png';
const slide04   = 'slides/slide04.png';
const slide05   = 'slides/slide05.png';
const slide06   = 'slides/slide06.png';

const slides = [
  { id: 1, type: 'image', src: '/portfolio-site/slides/slide01.png',       title: 'Why I built this',    index: '01' },
  { id: 2, type: 'video', src: '/portfolio-site/slides/aialertsdemo.mp4',  title: 'Demo',                index: '02' },
  { id: 3, type: 'image', src: '/portfolio-site/slides/slide02.png',       title: 'System Architecture', index: '03' },
  { id: 4, type: 'image', src: '/portfolio-site/slides/slide03.png',       title: 'Challenges and Solutions',        index: '04' },
  { id: 5, type: 'image', src: '/portfolio-site/slides/slide04.png',       title: 'Key learnings', index: '05' },
  { id: 6, type: 'image', src: '/portfolio-site/slides/slide05.png',       title: 'Working with AI',       index: '06' },
  { id: 7, type: 'image', src: '/portfolio-site/slides/slide06.png',       title: 'Tech stack', index: '07' },
];

const AlertsProject = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSections = slides.length + 2;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  const goNext = () => scrollTo(Math.min(activeIndex + 1, totalSections - 1));
  const goPrev = () => scrollTo(Math.max(activeIndex - 1, 0));

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex]);

  const isSlide = activeIndex > 0 && activeIndex <= slides.length;

  return (
    <div className="relative font-custom">

      {/* Blurred background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          filter: 'blur(5px) brightness(50%)',
          transform: 'scale(1.2)',
          zIndex: -1,
        }}
      />

      {/* Back button */}
      <nav className="fixed top-0 left-0 p-8 z-50">
        <button
          onClick={() => navigate('/')}
          className="mt-2 text-sm font-mono tracking-widest text-amber-400 border border-amber-400 border-opacity-40 px-4 py-2 rounded hover:bg-amber-400 hover:text-black transition-all duration-200"
        >
          ← Back to Home
        </button>
      </nav>

      {/* Slide counter — top right */}
      <div
        className="fixed top-0 right-0 p-8 z-50 transition-opacity duration-300"
        style={{ opacity: isSlide ? 1 : 0, pointerEvents: 'none' }}
      >
        <span className="font-mono text-sm text-white/40 tracking-widest">
          <span className="text-amber-400 text-lg font-black">
            {String(activeIndex).padStart(2, '0')}
          </span>
          {' '}/ {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Dot nav — right side */}
      <div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 transition-opacity duration-300"
        style={{ opacity: isSlide ? 1 : 0, pointerEvents: isSlide ? 'auto' : 'none' }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i + 1)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: activeIndex === i + 1 ? '#f59e0b' : 'rgba(255,255,255,0.25)',
              transform: activeIndex === i + 1 ? 'scale(1.5)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Arrow nav — bottom center */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
        >↑</button>
        <button
          onClick={goNext}
          disabled={activeIndex === totalSections - 1}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
        >↓</button>
      </div>

      {/* Snap scroll container */}
      <div
        ref={scrollRef}
        style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}
      >

        {/* Section 0: Hero */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          style={{ scrollSnapAlign: 'start' }}
          className="h-screen flex items-center justify-center text-white"
        >
          <div className="text-center px-4">
            <p className="font-mono text-s tracking-[0.4em] text-amber-400/70 uppercase mb-6">
              Project Presentation
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
              AI Agent to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                generate reports.
              </span>
            </h1>
            <p className="mt-10 text-white/70 font-mono text-xs tracking-widest animate-pulse">
              SCROLL DOWN OR USE ↓ TO BEGIN
            </p>
          </div>
        </section>

        {/* Sections 1–7: Slides */}
        {slides.map((slide, i) => (
          <section
            key={slide.id}
            ref={(el) => (sectionRefs.current[i + 1] = el)}
            style={{ scrollSnapAlign: 'start' }}
            className="h-screen flex flex-col items-center justify-center text-white px-6 md:px-16"
          >
            <div
              className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ maxHeight: '78vh' }}
            >
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: '78vh' }}
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                  style={{ maxHeight: '78vh' }}
                />
              )}
            </div>

            <div className="w-full max-w-5xl mt-4 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">{slide.index}</span>
              <span className="font-mono text-sm tracking-widest text-amber-400/80 uppercase">{slide.title}</span>
              <span className="font-mono text-xs text-white/20">{slide.index} / {String(slides.length).padStart(2, '0')}</span>
            </div>
          </section>
        ))}

        {/* Footer — natural height, no gap */}
        <section
          ref={(el) => (sectionRefs.current[slides.length + 1] = el)}
          style={{ scrollSnapAlign: 'start' }}
          className="text-white"
        >
          <Footer />
        </section>

      </div>
    </div>
  );
};

export default AlertsProject;
