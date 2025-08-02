import React from 'react'
import FadeInFromBottom from '../ui/FadeInFromBottom'

function TwentyIfft() {
    return (
        <div>
            <section className="relative min-h-screen w-full text-white overflow-hidden bg-black bg-opacity-80 pt-28 md:pt-40 pb-12">
                <div className="absolute inset-0">
                    {/* Optional: Add a darkened film-related background image or video here */}
                    <div className="w-full h-full bg-gradient-to-b from-[#0e0e0e] via-[#111827] to-[#1f2937] opacity-90" />
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center px-4 w-full max-w-7xl mx-auto text-center">
                    <FadeInFromBottom>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase">
                        20th International Film Festival of Thrissur (IFFT)
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 font-medium mt-5">
                        2025 SEPTEMBER 26 – OCTOBER 2 @ Thrissur, Kerala
                    </p>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mt-2">
                        The Twentieth Edition of the International Film Festival of Thrissur (IFFT), 2025 is being held from 26th September to 2nd October, not confined to a single venue but spreading its wings to suburban pockets around Thrissur.
                    </p>

                    </FadeInFromBottom>
                    <div className="text-left w-full max-w-7xl bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 mt-6">
                        <FadeInFromBottom>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Film Categories:</h3>
                        <ul className="list-disc list-inside text-gray-300 pl-4 space-y-1">
                            <li><strong>ASIAN Cinema</strong></li>
                            <li><strong>Global Cinema</strong> – Internationally acclaimed contemporary films made in 2024 from across the globe</li>
                            <li><strong>Indian Panorama</strong> – Films from various Indian languages</li>
                        </ul>

                        <h3 className="text-xl sm:text-2xl font-semibold pt-4 text-white mb-2">Key Highlights:</h3>
                        <ul className="list-disc list-inside text-gray-300 pl-4 space-y-1">
                            <li>Competition for BEST OF ASIAN - INDIAN - MALAYALAM Debut Films</li>
                            <li>IFFT - Shaji N Karun Asian Film Award: ₹1,00,000 for Best Asian debut cinema</li>
                            <li>IFFT - Aruna Vasudev Best Asian Film Director: ₹1,00,000 for debut filmmakers from Asia</li>
                            <li>IFFT - Dorothea Machingal FILM Award: ₹1,00,000 for debut filmmakers from India</li>
                            <li>IFFT - FILM Award: ₹1,00,000 for debut filmmakers in Malayalam</li>
                        </ul>
                        </FadeInFromBottom>
                    </div>
                        <FadeInFromBottom>
                    <p className="mt-6 text-lg font-semibold text-blue-500">50+ Movies</p>

                        </FadeInFromBottom>
                </div>
            </section>
        </div>
    )
}

export default TwentyIfft
