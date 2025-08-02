import React from 'react'
import hero from '../../assets/hero-2.jpg'
import FadeInFromBottom from '../ui/FadeInFromBottom'

function About() {
    return (
        <>
            <section className="relative min-h-screen md:h-screen pb-5 w-full text-white overflow-hidden">
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
                        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider text-[#e2c380]">
                            About Us
                        </h1>
                    </FadeInFromBottom>

                    <FadeInFromBottom>
                        <p className="mt-4  text-sm md:text-xl text-justify font-normal text-white tracking-wider">
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
            {/* history */}
            <section id="history" className="bg-white py-16 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-8">
                        History of Previous Festivals
                    </h3>

                    <div className="space-y-8 text-gray-800 text-lg leading-normal">
                        <p className='text-justify'>
                            The festivals of yesteryears were not restricted to movie house exhibitions. Seminars and talks by eminent film and art personalities witnessed active and ardent participation from all walks of life. The Tier 2 towns and villages were also brought to our operational ambit and the involvement of enthusiasts from those places were encouraging.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <p><strong className='text-blue-500'>2004</strong> - August | <strong>Venue:</strong> Sapna and Jos Theatres</p>
                                <p>90 films screened. Director: Prof. M.N Vijayan. Executive Director: Cherian Joseph. Chairman: K Radhakrishnan (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2005</strong> - August 26 – September 1 | <strong>Venue:</strong> Kairali and Sree Theatres</p>
                                <p>90 films screened. Director: Prof. K.G. Sankarapilai. Executive Director: Cherian Joseph. Chairman: K Radhakrishnan.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2006</strong> | <strong>Venue:</strong> Sree and Regional Theatre</p>
                                <p>Director: T V Chandran. Executive Director: Cherian Joseph. Chairman: K Radhakrishnan.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2008</strong> - January 18–24 | <strong>Venue:</strong> Bindu Theatre</p>
                                <p>Director: Chintha Ravindran. Executive Director: Dr. K Gopinathan. Chairman: Rajaji Mathew Thomas (MLA).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2009</strong> | <strong>Venue:</strong> Georgettans Ragam Theatre & Elite International</p>
                                <p>Director: Sunny Joseph. Executive Directors: Mohammed Arakkal & K.A. Balagopal. Chairman: Rajaji Mathew Thomas (MLA).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2011</strong> - March 25–31 | <strong>Venue:</strong> Ramdas & Ravikrishna Theatres, Thrissur</p>
                                <p>Director: Sadanand Menon. Executive Directors: P N Gopikrishnan & P S Manoj Kumar. Chairman: I P Paul (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2012</strong> - January 26 – February 1 | <strong>Venue:</strong> Sapna Theatre & Kailasam Theatre</p>
                                <p>Director: P N Gopikrishnan. Deputy Directors: K.A. Balagopal, A Radhakrishnan. Chairman: I P Paul (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2013</strong> | <strong>Venue:</strong> Sree Theatre, Town Hall, Wadakkanchery Thaalam, Talikulam Karthika</p>
                                <p>Director: Sara Joseph. Executive Director: Cherian Joseph. Chairman: I P Paul (Mayor). Working Chairman: Jossie Chandy. Treasurer: A. Radhakrishnan.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2014</strong> | <strong>Venue:</strong> Thrissur</p>
                                <p>Director: Vidyarthy Chatterjee. Executive Director: Cherian Joseph. Chairman: Rajan J. Pallan (Mayor). Working Chairman: Jossie Chandy.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2015</strong> | <strong>Venues:</strong> SREE (Thrissur), Kodakara CITY CINEMA, Irinjalakuda SINDHU, Mala Ganga Movies, Triprayar SREERAMA, Guruvayur BALAKRISHNA, Kunnamkulam LIVA, Changaramkulam KRISHNA, Elanad GIJO, Wadakkanchery JAYABHARATH</p>
                                <p>Director: Dr. K. Gopinathan. Executive Director: Mohammed Arakkal. Chairman: Rajan J Pallan. Working Chairman: Jossie Chandy.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2016</strong> | <strong>Venues:</strong> KAIRALY, Triprayar SREERAMA, Irinjalakuda PRABHAT, Mala GANGA Movies, Guruvayur BALAKRISHNA</p>
                                <p>Director: Neelan. Executive Director: Cherian Joseph. Chairperson: Smt. Ajitha Jayarajan (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2017</strong> | <strong>Venues:</strong> KAIRALY, Triprayar SREERAMA, Irinjalakuda PRABHAT, Mala GANGA Movies, Guruvayur BALAKRISHNA</p>
                                <p>Director: Dr. T. Meenapillai. Executive Director: Cherian Joseph. Chairman: Varghese Kandamkulathy (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2018</strong> | <strong>Venues:</strong> KAIRALY, Triprayar SREERAMA, Irinjalakuda PRABHAT, Mala GANGA Movies, Guruvayur BALAKRISHNA</p>
                                <p>Director: Dr. Roshny Swapna. Executive Director: Cherian Joseph. Chairperson: Varghese Kandankulathy (Deputy Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2019</strong> - March 15–21 | <strong>Venues:</strong> KAIRALY, Triprayar SREERAMA, Irinjalakuda PRABHAT, Mala GANGA Movies, Guruvayur BALAKRISHNA</p>
                                <p>Director: T Krishnan Unni. Artistic Director: P N Gopikrishnan. Executive Director: Cherian Joseph. Chairman: Varghese Kandamkulathy (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2020</strong> | <strong>Venues:</strong> Ramdas & Ravikrishna, Triprayar SREERAMA, Irinjalakuda PRABHAT, Varandarappilly Davis, GRAAMIKA - Kuzhikkatussery, Perinjanam CINEMAPURA, Pavaratty Cinema Centre</p>
                                <p>Director: Supriya Madangarly. Jury Chair: Aruna Vasudev. FIPRESCI Chair: Premendra Manzumder. Artistic Director: P N Gopikrishnan. Executive Director: Cherian Joseph. Chairperson: Ajitha Jayarajan (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2021</strong> | <strong>Venues:</strong> MEDLYCOT HALL (Thrissur), Triprayar SREERAMA, Varandarappilly Davies, Perinjanam CINEMAPURA, GRAAMIKA-Kuzhikkatussery, ENGADIYOOR, Ponnani</p>
                                <p>Director: T Krishnanunni. Artistic Director: P N Gopikrishnan. Executive Director: Cherian Joseph. Chairman: M K Varghese (Mayor).</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2022</strong> - March 27 – April 7</p>
                                <p>Director: Premendra Manzumder. Joint Director: K B Venu. Executive Director: Cherian Joseph.</p>
                            </div>
                            <hr />
                            <div>
                                <p><strong className='text-blue-500'>2023</strong> - March 3 – 9 | <strong>Venues:</strong> Kairali/Sree Theatre, Irinjalakuda Mass Theatre, Banerji Memorial Club, Centre for Media Studies</p>
                                <p>Director: Premendra Manzumder. Joint Director: K B Venu. Executive Director: Cherian Joseph. Chairman: K Rajan (Minister for Revenue).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About