import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundimage from '../assets/background.jpg';
import Footer from '../components/Footer';

//import profileImg from '../profile/profile.jpg'; 
import demoVideo from '../../public/videos/aialertsdemo.mp4';

const PresentationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stackItems = [
    { id: 1, type: 'image', src: "",          title: 'Why I built this' },
    { id: 2, type: 'video', src: demoVideo,    title: 'Demo' },
    { id: 3, type: 'image', src: 'slides/slide-03.png',          title: 'The idea' },
    { id: 4, type: 'image', src: 'slides/slide-04.png',          title: 'How it works' },
    { id: 5, type: 'image', src: 'slides/slide-05.png',          title: 'System architecture' },
    { id: 6, type: 'image', src: 'slides/slide-06.png',          title: 'Key learnings' },
    { id: 7, type: 'image', src: 'slides/slide-07.png',          title: 'Challenges & future' },
    { id: 8, type: 'image', src: 'slides/slide-08.png',          title: 'Tech stack' },
    { id: 9, type: 'image', src: 'slides/slide-09.png',          title: 'How AI helped' },
  ];


  return (
    <div className="relative min-h-screen text-white font-custom">

      {/* FIX 1: your existing blurred background, same as homepage */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          filter: 'blur(5px) brightness(50%)',
          transform: 'scale(1.2)',
          zIndex: -1,
        }}
      />

      {/* TOP NAVIGATION */}
      <nav className="fixed top-0 left-0 p-8 z-50">
        <button
          onClick={() => navigate('/')}
          className="mt-2 text-sm font-mono tracking-widest text-amber-400 border border-amber-400 border-opacity-40 px-4 py-2 rounded hover:bg-amber-400 hover:text-black transition-all duration-200"
        >
          ← Back to Home
        </button>
      </nav>

      {/* HERO TITLE */}
      <header className="min-h-[75vh] flex items-center justify-center pt-20">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-center px-4">
          AI Agent to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            generate reports.
          </span>
        </h1>
      </header>

      {/* THE STICKY STACK */}
      <main className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
          {stackItems.map((item, index) => {
            return (
              <div
                key={item.id}
                className="sticky w-full max-w-5xl transition-transform duration-500"
                style={{
                  // FIX 1: Double-check this exact line! This forces every new card to stop 30px lower than the last one.
                  top: `calc(10vh + ${index * 30}px)`, 
                  zIndex: index,
                  marginBottom:'60vh', // Keep this the same for every single card
                  paddingBottom: '12px',
                }}
              >
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900/80 backdrop-blur-xl group relative">

                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  )}

                  {/* Label */}
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-sm font-medium tracking-widest uppercase">{item.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* FIX 2: THE MAGIC SPACER */}
          {/* This invisible block gives the final card extra room to "stick" and stay on screen before the footer is pulled up */}
          <div className="h-[50vh] w-full pointer-events-none" aria-hidden="true" />

        </div>
      </main>

      {/* FOOTER */}
      <div className="relative -mt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default PresentationPage;
