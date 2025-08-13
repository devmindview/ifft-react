import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import pressmeet from '../../assets/pressmeet.jpeg'
import isffposter from '../../assets/isffposter.jpeg'
import isffposter1 from '../../assets/isffposter1.jpeg'
import isffmovies from '../../assets/issfmovies.png'

// isff gallery
import img1 from '../../assets/isff-gallery/1.jpeg'
import img2 from '../../assets/isff-gallery/2.jpeg'
import img3 from '../../assets/isff-gallery/3.jpeg'
import img4 from '../../assets/isff-gallery/4.jpeg'
import img5 from '../../assets/isff-gallery/5.jpeg'
import img6 from '../../assets/isff-gallery/6.jpeg'
import img7 from '../../assets/isff-gallery/7.jpeg'
import img9 from '../../assets/isff-gallery/9.jpeg'
import img10 from '../../assets/isff-gallery/10.jpeg'
import img11 from '../../assets/isff-gallery/11.jpeg'
import img12 from '../../assets/isff-gallery/12.jpeg'
import img13 from '../../assets/isff-gallery/13.jpeg'
import img14 from '../../assets/isff-gallery/14.jpeg'
import AboutCard from '../ui/AboutCard';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Isff2025() {

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
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img9 },
    { image: img10 },
    { image: img11 },
    { image: img12 },
    { image: img13 },
    { image: img14 },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Second International Science Film Festival - ISFF 2025 </title>
        <meta
          name="description"
          content="The 9th International Science Film Festival (IFFF) will be held in Thrissur, Kerala from 10–15 January 2026. Hosted by IFFT and partners. Entries invited."
        />
        <meta name="keywords" content="ISFT, ISFF, Film Festival Thrissur, Science Films, Cultural Festival India, IFFT 2026" />
        <meta property="og:title" content="IFFF 2026 - International Science Film Festival" />
        <meta property="og:description" content="The 9th IFFF will showcase folklore-themed short films and documentaries from around the world. Hybrid format: online + offline screenings." />
        <meta property="og:image" content="https://ifft.org.in/isff.jpeg" />
        <meta property="og:url" content="https://ifft.org.in/isff-2025" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Main Section */}
      <section className="min-h-screen max-w-7xl mx-auto px-4 pt-24 md:pt-40 pb-12">
        <div className="w-full h-auto rounded-sm mb-8">
          <img src={pressmeet} alt="ISFF Banner" className="w-full h-auto rounded-sm" />
        </div>

        {/* Heading + Description */}
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 uppercase">
            Second International Science Film Festival
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Uniting Science and Cinema - to be held in Thrissur from <strong>August 8–10</strong>, at the <strong>Kairali/Sree Theatre</strong>, <strong>Thrissur Model Girls VHSS auditorium</strong>, and <strong>Vijnansagar Science Park</strong>.
          </p>
        </div>

        {/* Organizer List with Poster Image to Right */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Text Block */}
          <div className="w-full md:w-3/4 space-y-6 text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold">The event is organized by:</p>
              <ul className="list-disc list-inside pl-4">
                <li>Thrissur District Planning Committee</li>
                <li>Thrissur District Panchayat</li>
                <li>Sametham - Samagra Education Programme</li>
                <li>Department of Public Education</li>
                <li>IFFT Chalachitrakendram</li>
                <li>Kerala Sasthra Sahithya Parishath</li>
                <li>Bhoumam Social Initiative</li>
                <li>Vijnansagar Science Park</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">The festival will screen around <strong>50 science films</strong> across 5 packages:</p>
              <ul className="list-disc list-inside pl-4">
                <li>David Attenborough Package</li>
                <li>Suresh Elamon Retro</li>
                <li>Kite Victer's Package</li>
                <li>C-DIT Package</li>
                <li>Marupakkam Chennai Package</li>
              </ul>
            </div>
          </div>

          {/* Portrait Image on Right (only for desktop) */}
          <div className="w-full md:w-1/4">
            <img
              src={isffposter}
              alt="ISFF Poster"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Organizer List 2 with Poster Image to Right */}
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          {/* Remaining Content */}
          <div className="w-full mt-6 md:w-3/4 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Students and the general public are welcome. A registration fee of ₹200 applies for the public.
            </p>

            <p>
              As part of the festival, a <strong>science quiz</strong> and <strong>essay competition</strong> will be held for children. This event is part of the “Sametham-Science Marathon” (July 21 – August 21).
            </p>

            <div>
              <strong>Special Lectures:</strong>
              <ul className="list-disc list-inside pl-4">
                <li><strong>Aug 9 (Saturday), 11 AM</strong> — Jomi P.L.: “Ramanujan: The Life that Embraced Infinity”</li>
                <li><strong>Aug 10, 11 AM</strong> — Dr. Baby Chakrapani: “Climate Crisis and Sustainable Development”</li>
              </ul>
            </div>

            <p>
              Under the “Sasthra Sametham” project, 100 science films will be produced. Training for students and teachers will begin in September/October.
            </p>

            <div className="mt-6">
              <strong>Press Conference Participants:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>Shri V. S. Prince – President, Thrissur District Panchayat</li>
                <li>Shri V. Manoj – Coordinator, Sametham Project</li>
                <li>Adv. K. P. Raviprakash – Festival Director, ISFF 2025</li>
                <li>Shri Cherian Joseph – General Coordinator, ISFF 2025</li>
              </ul>
            </div>
          </div>
          {/* Portrait Image on Right (only for desktop) */}
          <div className="w-full md:w-1/4">
            <img
              src={isffposter1}
              alt="ISFF Poster"
              className="w-full h-full mt-6 object-cover rounded-md"
            />
          </div>
        </div>

      </section>
      <section className="w-full bg-slate-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              ISFF 2025 Schedule
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              August 8 - 10, 2025 • Thrissur
            </p>
          </div>

          {/* First Image Schedule */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-indigo-500">
              SCREEN 1 – Model Girls HS Auditorium – August 8, Friday
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>9:30 am (Kite Victers) </strong> – എങ്ങനെ എങ്ങനെ എങ്ങനെ(sandal) 20:24
                Pride of kerala ep 16 (natural history മ്യൂ സിയം index gallery) 18:23
                Manjadi ep 07 (മേഘം) 10:48</li>
              <li><strong>11am : Inaugural Session </strong> – </li>
              <li><strong>1pm -2pm : (Kite Victers )</strong> – അറിവിന്റെ ലോകം ep 31 (the Volcano) 11:28
                Manjadi ep 07 (മേഘം) 10:48
                ജീവന്റെ thudippu ep 07 (28:04)</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-500">
              SCREEN 2 – Sree Theatre – August 9, Saturday - Indigenous Day
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-500">
              <li><strong>9:30 am (Kite Victers)</strong> – Quest for knowledge ep 01 (soil-bursting with life) 28:37
                Reaching for the strars (Astronauts in space) 28:32</li>
              <li><strong>11:30 am (Marupakkam)</strong> – BLUE CRAB (and a wooden camera/22'/ Peru- Venezuela
                MENTAWAI - souls of the forest/75'/ Indonesia</li>
              <li><strong>1:30 pm (Marupakkam)</strong> – SEED STORIES Dir: Chitrangada Choudhury; 42:00; India; Documentary
                JAMNAPAAR: Dir: Abhinava Bhattacharya; 24 min; India
                OTHER KOHINOORS : Dir: Uma Magal; 48 min; India</li>
              <li><strong>3:30 pm (IFFT Gopee)</strong> – The Last River/10'/Mexico
                Dining on despair / Poland / 34m / 2024
                Sweet Plastik/12'/Indonesia
                Biodiversity and beyond : The story of point Calimere/15:01/Dir:Sarthak Chawla</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-500">
              SCREEN 3 – Vijnan Sagar Science Park – August 9, Saturday – Indigenous Day
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>10:00 am (Goethe Institute)</strong> – CHECKER TOBI AND THE JOURNEY TO THE FLYING RIVERS (93 min)</li>
              <li><strong>11:45 am (Kite Victers)</strong> – Homi Bhabha (28:44), VSSC (28:43), Let’s Go Wild (28:10)</li>
              <li><strong>1:30 pm (Goethe Institute)</strong> – THE THEORY OF EVERYTHING (118 min)</li>
              <li><strong>3:00 – 4:30 pm</strong> – ഇലകൾ പച്ച പൂക്കൾ മഞ്ഞ (കണിക്കൊന്ന)11:25</li>
            </ul>
          </div>

          {/* Second Image Schedule */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-indigo-500">
              SCREEN 2 – Sree Theatre – August 10, Sunday
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>9:30 am</strong> – റിട്രോ
                1. തേക്കും കടുവയും, പറമ്പിക്കുളം കടുവ സങ്കേതത്തിന്റെ കഥ
                സുരേഷ് ഇളമൺ 2. Wetlands of Kerala <strong>MARUPAKKAM,Chennai The Leopard’s Tribe : Dir: Miriam Chandy Menacherry; 38 min; India</strong> </li>
              <li><strong>11:30 am</strong> – Mekong Apocalyse (55’) : Dir: Michael Buckley; 55 min; Canada / China / Cambodia / Vietnam
                The Illusion of Abundance : Dir : Erika Gonzalez Ramirez, Matthieu Lietaert; 60 min; Colombia</li>
              <li><strong>1:30 pm</strong> – Colony in Conflict : Dir: Rajani Mani; 73 min; India
                BEE THE SAVIOUR : Dir: Uma IYER/23:15'/India</li>
              <li><strong>3:30 pm</strong> – Besetzt - Lobau Bleibt :Dir : Gerald Baumann, Aron Ebner, Matteo Molina; 30 min; Austria</li>
            </ul>

            <h2 className="text-xl font-semibold text-indigo-500">
              SCREEN 3 – Vijnan Sagar Science Park – August 10, Sunday
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>10:00 am</strong> – 1. DAVID ATTENBORUGH Retro
                2. Hailstorm : Dir: Shobhit Jain; 60 min; India</li>
              <li><strong>11:45 am (CDIT Package)</strong> – 1. The weeping rice bowl / 1991/ 28'
                2. ഇന്ദ്ര നീലം /Director Pinky vasan/ 2019/28
                3. Pasture in Heaven / 2000 /38' Director:/K mohan kumar</li>
              <li><strong>1:30 pm (Goethe Institute)</strong> – STICK TOGETHER :Dir: Felix Maria Bühler,2023, Colour, 91 min,</li>
              <li><strong>3:00 pm</strong> – Meteorite Hunter - Dir: Natalia Anisimova; 61’; Russian Federation; Documentary</li>
            </ul>
          </div>


          <div className="text-center">
            <img
              src={isffmovies}
              alt="ISFF 2025 Posters"
              className="w-full object-contain rounded-lg shadow"
            />
            <a
              href="/ISFF 2025 shedule.pdf"
              download
              className="mt-6 inline-block bg-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              More Info / Download PDF
            </a>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto'>
        <h3 className="text-xl md:text-2xl px-3 font-semibold my-5 text-gray-600">Inaugural function photos</h3>
        {/* Right: Keen Slider */}
        <div className="md:w-100">
          <div ref={sliderRef} className="keen-slider">
            {cards.map((card, idx) => (
              <div key={idx} className="keen-slider__slide">
                <AboutCard image={card.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Isff2025
