import React from 'react'
import FadeInFromBottom from '../ui/FadeInFromBottom'
import shaji from '../../assets/shajipatron.jpg'
import { Helmet } from 'react-helmet';

function TwentyIfft() {
    return (
        <div>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>20th International Film Festival of Thrissur - IFFT 2025</title>
                <meta
                    name="description"
                    content="The 20th International Film Festival of Thrissur (IFFT) will be held from September 26 to October 2, 2025. Screenings and cultural programs across Thrissur, Kerala."
                />
                <meta
                    name="keywords"
                    content="IFFT 2025, Film Festival Kerala, Thrissur Film Festival, 20th IFFT, IFFT India, International Film Festival Thrissur, Cultural Festival Kerala"
                />
                <meta
                    property="og:title"
                    content="IFFT 2025 - 20th International Film Festival of Thrissur"
                />
                <meta
                    property="og:description"
                    content="The Twentieth Edition of IFFT will run from 26th September to 2nd October 2025, expanding to venues across suburban Thrissur. Join us for a week of global cinema and culture."
                />
                <meta
                    property="og:image"
                    content="https://ifft.org.in/assets/ifft.jpeg"  // Replace with actual OG image path
                />
                <meta
                    property="og:url"
                    content="https://ifft.org.in/twenty-ifft"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen  bg-white px-4 pt-28 md:pt-5">
                <div className="flex flex-col md:flex-row w-full max-w-7xl">

                    {/* Left Image */}
                    <div className="md:w-1/2 w-full h-auto md:h-[60vh] aspect-square">
                        <img
                            src={shaji}
                            alt="Old Patron"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 w-full flex items-center justify-center p-3 md:px-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl uppercase font-bold text-gray-900 mb-4">
                                In Dedication to Our Esteemed Patron
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                The International Film Festival of Thrissur pays heartfelt tribute to the guiding soul who shaped the cultural identity of our cinematic journey. His commitment to authentic storytelling and visual poetry has left a lasting legacy.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                As a pioneer in Malayalam cinema, he brought global recognition to Indian filmmaking. His works continue to influence generations of directors and film lovers.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We proudly honor <strong>Shaji N. Karun</strong> for his timeless contributions to cinema. Read more on his life and achievements on <a href="https://en.wikipedia.org/wiki/Shaji_N._Karun" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Wikipedia</a>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative min-h-screen w-full text-black overflow-hidden bg-white pt-10">
                <div className="absolute inset-0">
                    {/* Optional: Add a darkened film-related background image or video here */}
                    <div className="w-full h-full " />
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center px-4 w-full max-w-7xl mx-auto text-center">
                    <FadeInFromBottom>
                        <h2 className="text-3xl text-blue-500 sm:text-4xl md:text-5xl font-bold tracking-wide uppercase">
                            20th International Film Festival of Thrissur (IFFT)
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-800 font-medium mt-5">
                            2025 SEPTEMBER 26 – OCTOBER 2 @ Thrissur, Kerala
                        </p>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="text-base sm:text-lg text-gray-800 max-w-5xl mt-2">
                            The Twentieth Edition of the International Film Festival of Thrissur (IFFT), 2025 is being held from 26th September to 2nd October, not confined to a single venue but spreading its wings to suburban pockets around Thrissur.
                        </p>

                    </FadeInFromBottom>
                    <hr className='bg-black' />
                    <div className="text-left w-full max-w-7xl  p-2 rounded-2xl backdrop-blur-md  mt-4">
                        <FadeInFromBottom>
                            <div className="mb-4 space-y-2 max-w-7xl">
                                <h3 className="text-xl md:text-2xl font-semibold text-black tracking-tight">
                                    🎬 Submit Your Film Entry
                                </h3>
                                <p className="text-gray-500">
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
                        <FadeInFromBottom>
                            <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">Film Categories :</h3>
                            <ul className="list-disc list-inside text-gray-800 pl-4 space-y-1">
                                <li><strong>ASIAN Cinema</strong></li>
                                <li><strong>Global Cinema</strong> – Internationally acclaimed contemporary films made in 2024 from across the globe</li>
                                <li><strong>Indian Panorama</strong> – Films from various Indian languages</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-medium pt-4 text-black mb-2">Key Highlights :</h3>
                            <ul className="list-disc list-inside text-gray-800 pl-4 space-y-1">
                                <li>Competition for BEST OF ASIAN - INDIAN - MALAYALAM Debut Films</li>
                                <li>IFFT - <strong>Shaji N Karun Asian Film Award</strong> : ₹1,00,000 for Best Asian debut cinema</li>
                                <li>IFFT - <strong>Aruna Vasudev Best Asian Film Director</strong> : ₹1,00,000 for debut filmmakers from Asia</li>
                                <li>IFFT - <strong>Dorothea Machingal FILM Award</strong> : ₹1,00,000 for debut filmmakers from India</li>
                                <li><strong>IFFT - FILM Award</strong> : ₹1,00,000 for debut filmmakers in Malayalam</li>
                            </ul>
                        </FadeInFromBottom>
                    </div>
                    <FadeInFromBottom>
                        <p className="mt-6 text-lg font-semibold text-gray-600">50+ Movies</p>

                    </FadeInFromBottom>
                </div>
            </section>



        </div>
    )
}

export default TwentyIfft
