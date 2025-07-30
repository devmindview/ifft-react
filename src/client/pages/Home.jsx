import React, { useEffect, useRef } from 'react';
// import hero from '../../assets/hero.jpg'
import hero2 from '../../assets/hero-2.jpg'
import vid from '../../assets/vid.mp4'
import AboutCard from '../ui/AboutCard';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

import img1 from '../../assets/card.jpg';
import img2 from '../../assets/card1.webp';
import img3 from '../../assets/card2.webp';
import partner from '../../assets/associate.webp';

import lath from '../../assets/latheef.webp';
import FadeInFromBottom from '../ui/FadeInFromBottom';


function Home() {

    const [sliderRef, sliderInstance] = useKeenSlider({
        loop: true,
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            '(max-width: 768px)': {
                slides: { perView: 1, spacing: 10 },
            },
        },
    });

    // Auto-slide effect
    useEffect(() => {
        if (!sliderInstance.current) return;

        let interval; // Declare as let to allow reassignment

        const startAutoSlide = () => {
            interval = setInterval(() => {
                sliderInstance.current?.next();
            }, 2000); // Slide every 3 seconds
        };

        // Pause on hover
        const pause = () => clearInterval(interval);
        const resume = () => {
            pause();
            startAutoSlide();
        };

        const sliderElement = sliderRef.current;
        sliderElement?.addEventListener('mouseenter', pause);
        sliderElement?.addEventListener('mouseleave', resume);

        // Start initial auto-slide
        startAutoSlide();

        // Cleanup
        return () => {
            clearInterval(interval);
            sliderElement?.removeEventListener('mouseenter', pause);
            sliderElement?.removeEventListener('mouseleave', resume);
        };
    }, [sliderInstance, sliderRef]);

    const cards = [
        { image: img1, title: 'Award Winning Movies' },
        { image: img2, title: 'Best Movie' },
        { image: img3, title: 'Best Director' },
    ];

    return (
        <>
            <section className="relative h-screen w-full text-white overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover grayscale"
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Dark overlay (optional) */}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
    <FadeInFromBottom>
      <h1 className="text-5xl md:text-8xl font-semibold tracking-wider text-[#dfbf78]">
        INTERNATIONAL FILM <br /> FESTIVAL THRISSUR
      </h1>
    </FadeInFromBottom>

    <FadeInFromBottom>
      <p className="mt-1 text-3xl md:text-2xl font-medium text-white tracking-wider">
        20th International Film Festival of Thrissur, IFFT
      </p>
    </FadeInFromBottom>

    <FadeInFromBottom>
    <button className='border px-5 py-2 mt-3 hover:bg-white hover:text-black'>
        Book My Entry Ticket
    </button>
    </FadeInFromBottom>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 45" className="w-6 h-10 stroke-white">
      <rect x="1" y="1" width="28" height="43" rx="14" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="15" cy="10" r="2" fill="currentColor">
        <animate attributeName="cy" values="10;20;10" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
</section>


            {/* About */}
            <section className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col  gap-8">
                    {/* Left: Heading & Text */}
                    <div className="md:w-100">
                        <FadeInFromBottom>
                            <h2 className="text-4xl font-medium text-black tracking-wide">
                                The International Film Festival of Thrissur (IFFT) is a joint venture of Thrissur Janasamskara Chalachitra Kendram, Corporation of Thrissur
                            </h2>
                        </FadeInFromBottom>
                        <FadeInFromBottom>
                            <p className="mt-3 text-gray-600 tracking-wide">
                                INTERNATIONAL FILM FESTIVAL OF THRISSUR (IFFT) Since 2004
                            </p>
                        </FadeInFromBottom>

                        <FadeInFromBottom>
                            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-medium rounded rounded-s-none rounded-e-full shadow hover:bg-yellow-500 transition tracking-wide">
                                About us
                            </button>
                        </FadeInFromBottom>
                    </div>

                    {/* Right: Keen Slider */}
                    <div className="md:w-100">
                        <FadeInFromBottom>
                            <div ref={sliderRef} className="keen-slider">
                                {cards.map((card, idx) => (
                                    <div key={idx} className="keen-slider__slide">
                                        <AboutCard image={card.image} title={card.title} />
                                    </div>
                                ))}
                            </div>
                        </FadeInFromBottom>
                    </div>
                </div>
            </section>

            <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                    <img
                        src={hero2}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Top Slope */}
                <div className="absolute top-0 left-0 w-[110%] h-32 bg-white transform -translate-x-[5%] -translate-y-1/2 rotate-[3deg] origin-top z-10 clip-slope-top" />

                {/* Bottom Slope */}
                {/* <div className="absolute bottom-0 left-0 w-[110%] h-32 bg-white transform -translate-x-[5%] translate-y-1/2 -rotate-[-3deg] origin-bottom z-10 clip-slope-bottom" /> */}

                {/* Content */}
                <div className="relative z-20 max-w-5xl text-start px-4">

                    <FadeInFromBottom>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-wide">RUSH AFTER DARK <br /> FILM FESTIVAL 2025</h1>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="mt-3 text-lg md:text-2xl/7 font-normal tracking-wide">
                            A Twisted sister to the RUSH International Film Festival, RUSH After Dark is a late-night celebration of the bizarre, the bloody, and the beautifully unhinged.
                        </p>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="mt-2 text-md md:text-lg tracking-wide">
                            SUBMISSIONS NOW OPEN FOR RUSH AFTER DARK 2025
                        </p>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <button className='bg-yellow-500 text-xl md:text-2xl  text-black px-7 py-2 mt-3 tracking-wide'>
                            Submit Form
                        </button>
                    </FadeInFromBottom>
                </div>

            </section>
            <div className="relative overflow-hidden bg-white py-10">
                {/* Gradient Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="whitespace-nowrap animate-scroll-text text-8xl font-bold text-gray-800">
                    <span className="inline-block mx-4 uppercase">
                        Celebrating 20 Years of Cinematic Excellence. Stories That Inspire. Films That Last Forever.                    </span>
                </div>

            </div>
            <section className="min-h-fit pb-44 relative bg-gradient-to-br from-black via-gray-950 to-blue-950 text-white py-20 px-4 overflow-hidden">
                {/* Bottom Slope */}
                <div className="absolute bottom-0 left-0 w-[110%] h-32 bg-white transform -translate-x-[5%] translate-y-1/2 -rotate-[-2deg] origin-bottom z-10 clip-slope-bottom" />
                <div className="max-w-7xl mx-auto text-center">
                    {/* Heading */}
                    <FadeInFromBottom>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider leading-tight mb-6">
                            20<sup>th</sup> International Film Festival of Thrissur (IFFT 2.0)
                        </h1>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            A celebration of cinema, creativity, and culture in the heart of Kerala - experience 6 unforgettable days of global film magic.
                        </p>
                    </FadeInFromBottom>

                    {/* Director Section */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-center text-center">
                            <FadeInFromBottom>
                                <img
                                    src={lath}
                                    alt="Festival Director"
                                    className="w-24 h-24 md:w-28 md:h-32 rounded-full object-cover shadow-lg border-2 border-yellow-700"
                                />
                                <p className="text-lg font-semibold mt-2">Dr. K. K. Abdul Latheef</p>
                                <p className="text-sm text-gray-400">Festival Director</p>
                            </FadeInFromBottom>
                        </div>

                        <div className="text-left max-w-xl text-gray-200 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-inner border border-white/10">
                            <FadeInFromBottom>
                                <p className="text-sm md:text-lg">
                                    Undoubtedly, these are incredibly challenging times. However, cinema continues to inspire, provoke, and unite. Join us as we celebrate the power of storytelling, and the people behind it.
                                </p>
                            </FadeInFromBottom>
                        </div>
                    </div>

                    {/* Info Boxes */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                title: 'Venue',
                                content: (
                                    <p className=' text-lg'>
                                        Ramdas Theatre<br />
                                        Ravikrishna Theatre<br />
                                        Medlycot Hall, St. Thomas College Thrissur
                                        <p className="mt-2 text-base text-gray-400">Nov 10–15, 2024 • Thrissur, Kerala</p>
                                    </p>
                                )
                            },
                            {
                                title: 'In Association With',
                                content: (
                                    <p className=' text-lg'>
                                        Centre For Media Studies, St. Thomas College<br />
                                        Jos Theatre<br />
                                        Bhoumam Social Initiative<br />
                                        dm Foundation
                                    </p>
                                )
                            },
                            {
                                title: 'Organised By',
                                content: (
                                    <p className=' text-lg'>
                                        Janasamskara Chalachitra Kendram<br />
                                        Thrissur Corporation<br />
                                        Thrissur Jilla Panchayath
                                    </p>
                                )
                            },
                        ].map(({ title, content }, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition hover:scale-[1.02]"
                            >
                                <FadeInFromBottom>
                                    <h3 className="text-yellow-500 font-semibold text-lg mb-2">{title}</h3>
                                    <div className="text-sm text-gray-200 leading-relaxed">{content}</div>
                                </FadeInFromBottom>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Film Strip Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/filmstrip.png')] opacity-5 bg-cover bg-center pointer-events-none z-0" />
            </section>


            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <FadeInFromBottom>
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
                            In Association With
                        </h2>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg/6 leading-none">
                            We are proud to collaborate with institutions and organizations that support the creative arts and independent storytelling.
                        </p>
                    </FadeInFromBottom>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
                        {[...Array(5)].map((_, idx) => (
                            <div key={idx} className="group flex items-center justify-center p-4 border border-gray-200 rounded-lg  transition">
                                <FadeInFromBottom>
                                    <img
                                        src={partner}
                                        alt={`Brand ${idx + 1}`}
                                        className="h-14 object-contain grayscale group-hover:grayscale-0 group-hover:scale-125 transition duration-300"
                                    />
                                </FadeInFromBottom>
                            </div>


                        ))}
                    </div>
                </div>
            </section>


        </>
    );
}

export default Home;
