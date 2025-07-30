import React from 'react';

function AboutCard({ image, title }) {
  return (
    <div className="bg-white overflow-hidden mx-2 flex flex-col h-full">
      {/* Image container with fixed aspect ratio */}
      <div className="relative pt-[56.25%] "> {/* 16:9 aspect ratio */}
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        />
      </div>
      
      {/* Text container with min-height */}
      <div className="p-4 flex-grow flex items-center min-h-[80px]">
        <h3 className="text-lg font-normal tracking-wide line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default AboutCard;
