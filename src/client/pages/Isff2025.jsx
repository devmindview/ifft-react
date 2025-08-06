import React from 'react'
import { Helmet } from 'react-helmet';
import pressmeet from '../../assets/pressmeet.jpeg'
import isffposter from '../../assets/isffposter.jpeg'

function Isff2025() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Second International Science Film Festival - ISFF </title>
        <meta
          name="description"
          content="The 9th International Science Film Festival (IFFF) will be held in Thrissur, Kerala from 10–15 January 2026. Hosted by IFFT and partners. Entries invited."
        />
        <meta name="keywords" content="ISFT, ISFF, Film Festival Thrissur, Science Films, Cultural Festival India, IFFT 2026" />
        <meta property="og:title" content="IFFF 2026 - International Science Film Festival" />
        <meta property="og:description" content="The 9th IFFF will showcase folklore-themed short films and documentaries from around the world. Hybrid format: online + offline screenings." />
        <meta property="og:image" content="https://ifft.org.in/your-actual-image-path.jpg" />
        <meta property="og:url" content="https://ifft.org.in/ifff9" />
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

        {/* Remaining Content */}
        <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
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
      </section>
    </>
  )
}

export default Isff2025
