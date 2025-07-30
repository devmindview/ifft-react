            <section className="relative h-screen w-full text-white overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={hero}
                        alt="Film Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/0"></div>
                </div>

                {/* Centered Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
                    <FadeInFromBottom>
                        <h1 className="text-5xl md:text-8xl font-semibold tracking-wider text-[#e2c380]">
                            INTERNATIONAL FILM <br /> FESTIVAL THRISSUR
                        </h1>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="mt-1 text-3xl md:text-2xl font-medium text-white tracking-wider">
                            20th International Film Festival of Thrissur, IFFT
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