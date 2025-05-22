import React from 'react';

const WeddingHero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/img/1.jpeg')`
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* "NOS CASAMOS" curved text */}
        <div className="mb-8">
          <svg width="300" height="80" viewBox="0 0 300 80" className="mx-auto">
            <defs>
              <path id="curve" d="M 30 60 Q 150 20 270 60" fill="none" />
            </defs>
            <text className="fill-white text-lg font-normal tracking-widest uppercase">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                NOS CASAMOS!
              </textPath>
            </text>
          </svg>
        </div>

        {/* Names - Big and relaxed */}
        <div>
          <h1 className="text-white text-8xl md:text-9xl lg:text-[12rem] font-light mb-4 leading-none">
            Florencia
          </h1>
          <div className="text-white text-4xl md:text-5xl font-light mb-4">
            &
          </div>
          <h1 className="text-white text-8xl md:text-9xl lg:text-[12rem] font-light leading-none">
            Nicolas
          </h1>
        </div>

      </div>
    </div>
  );
};

export default WeddingHero;