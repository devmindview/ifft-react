import React from 'react'
import hero from '../../assets/hero-2.jpg'
import FadeInFromBottom from '../ui/FadeInFromBottom'

function About() {
    return (
        <>
            <section className="relative h-screen w-full text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={hero}
                        alt="Film Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                {/* Centered Content */}
                <div className="relative max-w-7xl mx-auto z-10 flex flex-col justify-center items-center text-center h-full px-4 pt-28 md:pt-0">
                    <FadeInFromBottom>
                        <h1 className="text-5xl md:text-5xl font-semibold tracking-wider text-[#e2c380]">
                            INTERNATIONAL FILM  FESTIVAL THRISSUR
                        </h1>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="mt-3  text-sm md:text-xl text-justify font-normal text-white tracking-wider">
                            INTERNATIONAL FILM FESTIVAL OF THRISSUR (IFFT) Since 2004
                            Film festivals are the merging points of the National and International Cinema. It’s an arena where noteworthy films from across the globe are screened.  Film festivals in India had its origin in the year 1952 at Delhi. In the subsequent years, film festivals were conducted in other cities, especially during 1990s. The film festivals were regionalized and localized from the year 2000 onwards.
                            The International Film Festival of Thrissur (IFFT) is a joint venture of Thrissur Janasamskara Chalachitra Kendram, Corporation of Thrissur, Thrissur Jilla Panchayath, Banerji Memorial Club and Jos Theatre & St. Thomas College, Thrissur, with the patronage and active involvement of film connoisseurs of the city of Thrissur and neighbouring suburbs, Kerala Chalachitra Academy, Kerala State Film Development Corporation Ltd.(KSFDC) other government bodies and the business community.  The first edition of International Film Festival of Thrissur (IFFT) was launched in the year in 2004 with the support of Thrissur Corporation. IFFT has the unique distinction of being the second longest running film festival in Kerala, held under the aegis of Chalachitra Kendram, a film society.  IFFT has successfully conducted 19 editions so far, with the prime focus on bringing the best in contemporary and classic cinema, both at the national and international levels, to its audiences and the development of a vibrant film culture.
                        </p>
                    </FadeInFromBottom>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 45" className="w-6 h-10 stroke-white">
                        <rect x="1" y="1" width="28" height="43" rx="14" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="15" cy="10" r="2" fill="currentColor">
                            <animate
                                attributeName="cy"
                                values="10;20;10"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>

            </section>
        </>
    )
}

export default About