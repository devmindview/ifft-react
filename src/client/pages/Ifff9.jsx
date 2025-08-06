import React from 'react';
import { Helmet } from 'react-helmet';
import ifff from '../../assets/ifff.jpeg'

function Ifff9() {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>9th International Folklore Film Festival - IFFF Thrissur</title>
        <meta
          name="description"
          content="The 9th International Folklore Film Festival (IFFF) will be held in Thrissur, Kerala from 10–15 January 2026. Hosted by IFFT and partners. Entries invited."
        />
        <meta name="keywords" content="IFFF, IFFF, Film Festival Thrissur, Folklore Films, Cultural Festival India, IFFT 2026" />
        <meta property="og:title" content="IFFF 2026 - International Folklore Film Festival" />
        <meta property="og:description" content="The 9th IFFF will showcase folklore-themed short films and documentaries from around the world. Hybrid format: online + offline screenings." />
        <meta property="og:image" content="https://ifft.org.in/your-actual-image-path.jpg" />
        <meta property="og:url" content="https://ifft.org.in/ifff9" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Main Content */}
      <section className="min-h-screen max-w-7xl mx-auto px-4 pt-24 md:pt-40 pb-12">
        <img
          src={ifff} // 👉 replace with a real hosted image path (not Google link)
          alt="9th International Folklore Film Festival Poster"
          className="w-full mb-8 rounded-sm"
        />

        <article>
          <h1 className="text-3xl font-bold mb-4 text-blue-500 uppercase">International Folklore Film Festival (IFFF) - 9th Edition</h1>

          <p className="mb-4">
            The 9th edition of International Folklore Film Festival (IFFF) is being organized by the International Film Festival of Thrissur (IFFT), Bhoumam Social Initiative, Centre for Media Studies, St. Thomas College, Thrissur, and International Folk Films India.
          </p>

          <p className="mb-4">
            <strong>IFFF 9</strong> will be held during <strong>10–15 January 2026</strong> in a hybrid format, featuring both physical and online screenings.
          </p>

          <p className="mb-4">
            We invite entries of folklore-based short and documentary films for this edition. Folklore includes themes from rural life, traditions, mythology, biodiversity, oral history, handicrafts, and more.
          </p>

          <p className="mb-4">
            Filmmakers are encouraged to submit work that captures traditional knowledge, nature-based lifestyles, cultural aesthetics, and heritage. Films can be in any language but must be folklore-oriented.
          </p>

          <p className="mb-4">
            <strong>Topics of interest:</strong> Art, Heritage, Culture, Oral Traditions, Biodiversity, Mythology, Traditional Crafts.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Ifff9;
