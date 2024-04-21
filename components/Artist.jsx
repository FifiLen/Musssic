import React from 'react';

const randomArtists = [
    "EchoVerse",
    "EchoWaves",
    "Sapphire Soul",
    "The Starlight Serenade",
    "Midnight Mirage",
    "Celestial Symphony",
    "Lunar Lullaby",
    "Aurora Borealis",
    "Galactic Groove",
    "Stellar Sirens",
    "Nebula Nova",
    "Cosmic Cadence",
    "Solar Serenade",
    "Celestial Choir",
    "Orion's Odyssey",
    "Astral Harmony",
    "Eclipse Ensemble",
    "Starshine Sonata",
    "Infinity Ensemble",
    "Moonlight Melody",
    "Space Serenity",
    "Nova Notes",
    "Galaxy Groove",
    "Supernova Symphony"
  ];
  

const Artist = () => {
  const renderRandomArtists = () => {
    return randomArtists.map((artist, index) => (
      <div key={index} className='bg-orange-400 py-2 px-6 text-xl font-bold tracking-tighter'>
        <p>{artist}</p>
      </div>
    ));
  };

  return (
    <section>
    <div className='performers w-full flex justify-start items-center py-36'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-6xl font-bold tracking-tighter bg-orange-400 w-fit mb-6 p-3'>Performers</h2>
        <div className=' max-w-7xl mx-auto flex flex-wrap gap-6'>
     {renderRandomArtists()}
   </div>
      </div>

     
    </div>
    
   </section>
  );
};

export default Artist;
