import React from "react";
import kottaka1 from '../../assets/kottaka/kottaka1.avif';
import kottaka2 from '../../assets/kottaka/kottaka2.avif';
import kottaka3 from '../../assets/kottaka/kottaka3.avif';
import kottaka4 from '../../assets/kottaka/kottaka4.avif';
import kottaka5 from '../../assets/kottaka/kottaka5.avif';
import kottaka6 from '../../assets/kottaka/kottaka6.avif';
import kottaka7 from '../../assets/kottaka/kottaka7.avif';
import kottaka8 from '../../assets/kottaka/kottaka8.avif';
import kottaka9 from '../../assets/kottaka/kottaka9.avif';
import kottaka10 from '../../assets/kottaka/kottaka10.avif';

import FadeInFromBottom from "../ui/FadeInFromBottom";

const magazines = [
  {
    id: 1,
    image: kottaka1,
    link: "#",
  },
  {
    id: 2,
    image: kottaka2,
    link: "#",
  },
  {
    id: 3,
    image: kottaka3,
    link: "#",
  },
  {
    id: 4,
    image: kottaka4,
    link: "#",
  },
  {
    id: 5,
    image: kottaka5,
    link: "#",
  },
  {
    id: 6,
    image: kottaka6,
    link: "#",
  },
    {
    id: 7,
    image: kottaka7,
    link: "#",
  },
    {
    id: 8,
    image: kottaka8,
    link: "#",
  },
    {
    id: 9,
    image: kottaka9,
    link: "#",
  },
    {
    id: 10,
    image: kottaka10,
    link: "#",
  },

];

function Kottaka() {
  return (
    <section className=" bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h3 className="text-lg md:text-2xl text-red-800 font-medium text-center  my-10">Kottaka Issues - List</h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-11 md:mt-24">
          {magazines.map((mag) => (
            <div key={mag.id} className="flex flex-col items-center">
              <FadeInFromBottom>
                <img
                src={mag.image}
                alt={`Magazine ${mag.id}`}
                className="w-full h-auto object-cover rounded shadow-md"
              />
              </FadeInFromBottom>
              <a
                href={mag.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
              >
                DOWNLOAD
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Kottaka;
