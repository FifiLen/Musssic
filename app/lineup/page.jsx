"use client";
import React from "react";

const artists = [
  {
    name: "EchoVerse",
    bio: "An eclectic mix of sounds from the cosmos.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "EchoWaves",
    bio: "Surfing the sonic waves of space.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Sapphire Soul",
    bio: "Deep blues and soulful melodies.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Neon Dreamer",
    bio: "Bright lights and dreamy beats.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "The Galactic Drift",
    bio: "Journey through the stars with melodic drifts.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Rhythm Comet",
    bio: "Catch the tail of fast-paced rhythms and vibrant soundscapes.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "AquaGroove",
    bio: "Flow with the waves of soothing, liquid tunes.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Cyber Symphony",
    bio: "An orchestral fusion with modern cybernetic enhancements.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Lunar Echoes",
    bio: "Mysterious sounds reverberating from the moon.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Solar Vibes",
    bio: "Warm and radiant music to light up your soul.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Orbit Pulse",
    bio: "Electronic pulses and beats orbiting around cutting-edge technology.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Stellar Jazz",
    bio: "Smooth jazz from the heart of the stars.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Quantum Tunes",
    bio: "Explore the probabilities of music in the quantum realm.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Cosmic Strings",
    bio: "Striking chords that resonate through the cosmos.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Vortex Harmony",
    bio: "Music that spirals into the soul from the deep vortex.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Nebula Melodies",
    bio: "Notes and tunes floating through the colorful nebula.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Meteor Beats",
    bio: "Intense, fast beats like meteors racing through the sky.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Astral Folk",
    bio: "Folk music with a twist from the astral plane.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Void Echo",
    bio: "Echoes from the void that fill the silence with depth.",
    imageUrl: "/assets/images/heroImage.png",
  },
  {
    name: "Planet Bass",
    bio: "Bass lines that resonate like the deep core of a planet.",
    imageUrl: "/assets/images/heroImage.png",
  },
];

const ArtistCard = ({ artist }) => {
  return (
    <article className="bg-orange-400 py-2 px-6 text-xl font-bold m-2 rounded-lg shadow-lg">
      <img
        src={artist.imageUrl || "/assets/images/heroImage.png"}
        alt={artist.name}
        className="w-32 h-32 object-cover rounded-full mx-auto"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/images/heroImage.png";
        }}
      />
      <h3>{artist.name}</h3>
      <p className="text-sm">{artist.bio}</p>
    </article>
  );
};

const Lineup = () => {
  return (
    <section className="bg-black w-full py-56 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Performers Lineup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <ArtistCard key={artist.name + index} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lineup;
