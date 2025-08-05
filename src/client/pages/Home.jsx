import React, { useEffect, useRef } from 'react';
// import hero from '../../assets/hero.jpg'
import hero2 from '../../assets/hero.jpg'
import vid from '../../assets/vid.mp4'
import AboutCard from '../ui/AboutCard';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

import img1 from '../../assets/card.jpg';
import img2 from '../../assets/card1.webp';
import img3 from '../../assets/card2.webp';
import partner from '../../assets/associate.webp';

import dora from '../../assets/dora.webp';
import shaji from '../../assets/shaji.webp';
import aruna from '../../assets/aruna.webp';
import FadeInFromBottom from '../ui/FadeInFromBottom';
import EventSection from '../components/EventSection';

const venues = [
    {
        year: '2015',
        title: 'Avengers: Age Of Ultron',
        director: 'Alvon D. Hebdo',
        budget: '$100 Million',
        image: '/images/avengers.jpg',
    },
    {
        year: '2018',
        title: 'The Banshees of Inisherin',
        director: 'Alvon D. Hebdo',
        budget: '$100 Million',
        image: '/images/banshees.jpg',
    },
    {
        year: '2022',
        title: 'Puss in Boots: The Last Wish',
        director: 'Alvon D. Hebdo',
        budget: '$100 Million',
        image: '/images/puss.jpg',
    },
    {
        year: '2023',
        title: 'Shotgun Wedding',
        director: 'Alvon D. Hebdo',
        budget: '$100 Million',
        image: '/images/shotgun.jpg',
    },
];
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
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Subtle center darkness */}
                </div>

                {/* Centered Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
                    <FadeInFromBottom>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-[#ffd57c]">
                            International Film <br /> Festival Thrissur
                        </h1>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="mt-1 text-xl md:text-3xl font-medium text-white tracking-wider">
                            Celebrating 20th International Film Festival of Thrissur <br /> 2025 SEPTEMBER 26- OCTOBER 2 @Thrissur
                        </p>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <a
                            href="#about-home"
                            className="inline-block my-6 px-6 py-2 border border-white text-white rounded-lg font-medium tracking-wide
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                        >
                            Entry Form
                        </a>
                    </FadeInFromBottom>


                </div>

                {/* Scroll Indicator */}
                <a href="#about-home">
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 45" className="w-6 h-10 stroke-white">
                            <rect x="1" y="1" width="28" height="43" rx="14" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="15" cy="10" r="2" fill="currentColor">
                                <animate attributeName="cy" values="10;20;10" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    </div>
                </a>
            </section>

            {/* Upcoming events */}
            <section className="py-20 bg-gradient-to-br from-black via-black to-slate-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8">Upcoming Events</h3>

                    <div className="relative w-full overflow-hidden group">
                        <div className="flex w-max animate-scroll-card gap-6 group-hover:[animation-play-state:paused]">
                            {[...Array(2)].flatMap(() =>
                                [
                                    {
                                        id: 1,
                                        title: "Opening Ceremony",
                                        date: "Nov 10, 2024",
                                        image: "/events/opening.jpg",
                                        location: "Kairali Theatre, Thrissur",
                                    },
                                    {
                                        id: 2,
                                        title: "Global Cinema Showcase",
                                        date: "Nov 11, 2024",
                                        image: "/events/global.jpg",
                                        location: "Ravikrishna Theatre",
                                    },
                                    {
                                        id: 3,
                                        title: "Directors' Panel Talk",
                                        date: "Nov 12, 2024",
                                        image: "/events/panel.jpg",
                                        location: "Medlycot Hall",
                                    },
                                    {
                                        id: 4,
                                        title: "Short Film Night",
                                        date: "Nov 13, 2024",
                                        image: "/events/shorts.jpg",
                                        location: "Jos Theatre",
                                    },
                                    {
                                        id: 5,
                                        title: "Award Ceremony",
                                        date: "Nov 14, 2024",
                                        image: "/events/awards.jpg",
                                        location: "St. Thomas College",
                                    },
                                    {
                                        id: 6,
                                        title: "Closing Gala",
                                        date: "Nov 15, 2024",
                                        image: "/events/closing.jpg",
                                        location: "Kairali Theatre",
                                    },
                                ].map((event, index) => (
                                    <div
                                        key={`${event.id}-${index}`}
                                        className="min-w-[280px] max-w-xs bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md overflow-hidden"
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-16 md:h-24 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                                            <p className="text-sm text-gray-300">{event.date}</p>
                                            <p className="text-sm text-gray-400">{event.location}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id='about-home' className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col  gap-8">
                    {/* Left: Heading & Text */}
                    <div className="md:w-100">
                        <FadeInFromBottom>
                            <h3 className="text-3xl md:text-5xl font-semibold text-gray-900">
                                The International Film Festival of Thrissur (IFFT) is a joint venture of Thrissur Janasamskara Chalachitra Kendram, Corporation of Thrissur
                            </h3>
                        </FadeInFromBottom>
                        <FadeInFromBottom>
                            <p className="mt-3 text-gray-600 tracking-wide">
                                INTERNATIONAL FILM FESTIVAL OF THRISSUR (IFFT) Since 2004
                            </p>
                        </FadeInFromBottom>

                        <FadeInFromBottom>
                            <div className="mt-12 space-y-6 max-w-7xl">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
                                    🎬 Submit Your Film Entry
                                </h3>
                                <p className="text-gray-600">
                                    Download the official entry form and submit to the appropriate category.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {/* Asian Cinema */}
                                    <div className="relative flex flex-col bg-white border border-gray-300 text-black p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                                        <span className="text-lg font-semibold text-indigo-800">Asian Cinema</span>
                                        <p className="text-sm text-gray-600 mt-2">📄 Download Form</p>
                                        <a
                                            href="/20th IFFT - 2025 Competition Films  asian.pdf"
                                            download
                                            className="absolute bottom-4 right-4 inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition"
                                        >
                                            Apply Now
                                        </a>
                                    </div>


                                    {/* Indian Cinema */}
                                    <div className="relative flex flex-col bg-white border border-gray-300 text-black p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                                        <span className="text-lg font-semibold text-red-800">Indian Cinema</span>
                                        <p className="text-sm text-gray-600 mt-2">📄 Download Form</p>
                                        <a
                                            href="/20th IFFT - 2025 Competition Films Indian.pdf"
                                            download
                                            className="absolute bottom-4 right-4 inline-block bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                    {/* Malayalam Cinema */}
                                    <div className="relative flex flex-col bg-white border border-gray-300 text-black p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                                        <span className="text-lg font-semibold text-yellow-800">Malayalam Cinema</span>
                                        <p className="text-sm text-gray-600 mt-2">📄 Download Form</p>
                                        <a
                                            href="/20th IFFT - 2025 Competition Films malayalam.pdf"
                                            download
                                            className="absolute bottom-4 right-4 inline-block bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-yellow-700 transition"
                                        >
                                            Apply Now
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </FadeInFromBottom>




                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-0">🎬 Best Films 19 <sup>th</sup> IFFT</h3>
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

            {/* Details */}
            <section className="min-h-fit pt-40 pb-32 relative bg-gradient-to-br from-green-950 via-gray-950 to-blue-950 text-white py-20 px-4 overflow-hidden">

                {/* Top Slope */}
                {/* <div className="absolute top-0 left-0 w-[110%] h-32 bg-white transform -translate-x-[5%] -translate-y-1/2 rotate-[3deg] origin-top z-10 clip-slope-top" /> */}
                <div className="max-w-7xl mx-auto text-center">
                    {/* Heading */}
                    <FadeInFromBottom>
                        <p className="text-4xl md:text-5xl font-extrabold tracking-wide  leading-tight mb-6">
                            20<sup>th</sup> International Film Festival of  Thrissur (IFFT 2.0)
                        </p>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="text-lg/6 md:text-2xl/7 text-gray-300 max-w-3xl mx-auto">
                            A celebration of cinema, creativity, and culture in the heart of Kerala - experience 6 unforgettable days of global film magic.
                        </p>
                    </FadeInFromBottom>

                    {/* Director Section */}
                    <div className="mt-2 w-full flex flex-col items-center justify-center gap-8 px-0 sm:px-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-12">
                            {[
                                { src: shaji, name: "SHAJI N KARUN", title: "Festival Director" },
                                { src: aruna, name: "ARUNA VASUDEV", title: "Festival Director" },
                                { src: dora, name: "DOROTHEA MACHINGAL", title: "Festival Director" },
                            ].map(({ src, name, title }, i) => (
                                <FadeInFromBottom key={i}>
                                    <div className="group flex flex-col items-center text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-md min-h-[240px] w-full hover:grayscale-0 ">
                                        <img
                                            src={src}
                                            alt={name}
                                            className="grayscale group-hover:grayscale-0 transition duration-500 ease-in-out w-48 h-40 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg border-2 border-transparent mb-2"
                                        />
                                        <p className="text-base font-semibold text-white">{name}</p>
                                        {/* <p className="text-sm text-gray-400">{title}</p> */}
                                    </div>
                                </FadeInFromBottom>
                            ))}
                        </div>

                        <div className="w-full text-left text-gray-200 bg-white/5 backdrop-blur-md p-6 rounded-lg shadow-inner border border-white/10 transition hover:scale-[1.01]">
                            <FadeInFromBottom>
                                <p className="text-lg/6 md:text-lg">
                                    Undoubtedly, these are incredibly challenging times. However, cinema continues to inspire, provoke, and unite. Join us as we celebrate the power of storytelling, and the people behind it. The Twentieth Edition of the International Film Festival of Thrissur (IFFT), 2025 is being held from <span className='text-blue-300'>26th September to 2nd October</span> , not confined to a single venue but spreading its wings to suburban pockets around Thrissur.
                                </p>
                            </FadeInFromBottom>
                        </div>
                    </div>


                    {/* Info Boxes */}
                    <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
                        {[
                            {
                                title: 'Venue',
                                content: (
                                    <p className=' text-lg/6'>
                                        KAIRALI/SREE Theatre, Thrissur<br />

                                        St.Thomas College <br />
                                        Bini Heritage <br />
                                        Swaraj Round <br />

                                        {/* <p className="mt-2 text-base text-gray-400">Nov 10–15, 2024 • Thrissur, Kerala</p> */}
                                    </p>
                                )
                            },
                            {
                                title: 'In Association With',
                                content: (
                                    <p className=' text-lg/6'>
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
                                    <p className=' text-lg/6'>
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
                                    <h3 className="text-blue-500 font-semibold text-lg mb-2">{title}</h3>
                                    <div className="text-sm text-gray-200 leading-relaxed">{content}</div>
                                </FadeInFromBottom>



                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Film Strip Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/filmstrip.png')] opacity-5 bg-cover bg-center pointer-events-none z-0" />
            </section>

            {/* Moving long text */}
            <div className="relative overflow-hidden bg-white py-1 md:py-6">
                {/* Gradient Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

                <div className="whitespace-nowrap  animate-scroll-text text-2xl md:text-8xl font-bold text-gray-800">
                    <span className="inline-block  mx-4 uppercase ">
                        Celebrating 20 Years of Cinematic Excellence. Stories That Inspire. Films That Last Forever.</span>
                </div>

            </div>


            <section className="relative max-h-fit  pt-10 pb-24  md:pt-32 md:pb-40 flex items-center justify-center text-white overflow-hidden">
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                    <img
                        src={hero2}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/80 to-blue-950/70"></div>
                </div>



                {/* Bottom Slope */}
                <div className="absolute bottom-0 left-0 w-[110%] h-32 bg-white transform -translate-x-[5%] translate-y-1/2 -rotate-[-2deg] origin-bottom z-10 clip-slope-bottom" />

                {/* Content */}
                <div className="relative z-20 max-w-7xl text-start px-4">

                    <FadeInFromBottom>
                        <h1 className="text-4xl md:text-8xl font-bold tracking-wide">LIGHTS BEYOND FRAMES <br /> FILM FESTIVAL 2025</h1>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="mt-3 text-lg md:text-2xl/7 font-normal tracking-wide">
                            A bold celebration of cinema that transcends borders and boundaries. The International Film Festival 2025 invites stories that move, challenge, and inspire from the deeply personal to the fiercely political.
                        </p>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="mt-3 text-md md:text-lg text-gray-400 tracking-wide">

                            Download the Delegate form and submit .
                        </p>
                    </FadeInFromBottom>
                    <div className='w-100 flex flex-col md:flex-row gap-4'>
                        <FadeInFromBottom>
                            <a
                                href="/Membership Form Pdf.pdf"
                                download
                                className="inline-block"
                            >
                                <button className="bg-yellow-500 text-xl md:text-2xl text-black px-7 py-2 mt-3 tracking-wide hover:bg-yellow-600 transition rounded">
                                    Delegate / Membership Form
                                </button>
                            </a>
                        </FadeInFromBottom>
                    </div>

                    <div className="mt-6 text-left w-full mx-auto space-y-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
                        <FadeInFromBottom>
                            <p className="text-lg sm:text-xl mb-3 text-gray-300 font-medium">
                                2025 SEPTEMBER 26 – OCTOBER 2 @ Thrissur, Kerala
                            </p>
                            <h3 className="text-xl sm:text-2xl mb-2 font-semibold text-white">Film Categories:</h3>
                            <ul className="list-disc list-inside text-lg text-gray-300 pl-4 space-y-1">
                                <li><strong>ASIAN Cinema</strong></li>
                                <li><strong>Global Cinema</strong> – Internationally acclaimed contemporary films made in 2024 from across the globe</li>
                                <li><strong>Indian Panorama</strong> – Films from various Indian languages</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl mb-2 font-semibold pt-4 text-white">Key Highlights:</h3>
                            <ul className="list-disc list-inside text-lg text-gray-300 pl-4 space-y-1">
                                <li>Competition for BEST OF ASIAN - INDIAN - MALAYALAM Debut Films</li>
                                <li>IFFT - Shaji N Karun Asian Film Award: ₹1,00,000 for Best Asian debut cinema</li>
                                <li>IFFT - Aruna Vasudev Best Asian Film Director: ₹1,00,000 for debut filmmakers from Asia</li>
                                <li>IFFT - Dorothea Machingal FILM Award: ₹1,00,000 for debut filmmakers from India</li>
                                <li>IFFT - FILM Award: ₹1,00,000 for debut filmmakers in Malayalam</li>
                            </ul>
                        </FadeInFromBottom>
                    </div>

                    <p className="mt-6 text-lg text-center font-semibold text-yellow-400">50+ Movies</p>


                </div>

            </section>



            {/* <EventSection /> */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <FadeInFromBottom>
                        <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
                            In Association With
                        </h3>
                    </FadeInFromBottom>
                    <FadeInFromBottom>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg/5 leading-none">
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
