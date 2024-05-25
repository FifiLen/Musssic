import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const randomArtists = [
  { name: "EchoVerse", image: "/assets/images/heroImage.png" },
  { name: "EchoWaves", image: "/assets/images/artist1.jpg" },
  { name: "Sapphire Soul", image: "/assets/images/artist2.jpg" },
  { name: "The Starlight Serenade", image: "/assets/images/artist3.jpg" },
  { name: "Midnight Mirage", image: "/assets/images/artist4.jpg" },
  { name: "Celestial Symphony", image: "/assets/images/artist5.jpg" },
  { name: "Lunar Lullaby", image: "/assets/images/artist6.jpg" },
  { name: "Aurora Borealis", image: "/assets/images/artist7.jpg" },
  { name: "Galactic Groove", image: "/assets/images/artist8.jpg" },
  { name: "Stellar Sirens", image: "/assets/images/artist9.jpg" },
  { name: "Nebula Nova", image: "/assets/images/artist10.jpg" },
  { name: "Cosmic Cadence", image: "/assets/images/artist11.jpg" },
  { name: "Solar Serenade", image: "/assets/images/artist12.jpg" },
  { name: "Celestial Choir", image: "/assets/images/artist13.jpg" },
  { name: "Orion's Odyssey", image: "/assets/images/artist14.jpg" },
  { name: "Astral Harmony", image: "/assets/images/artist15.jpg" },
  { name: "Eclipse Ensemble", image: "/assets/images/artist16.jpg" },
  { name: "Starshine Sonata", image: "/assets/images/artist17.jpg" },
  { name: "Infinity Ensemble", image: "/assets/images/artist18.jpg" },
  { name: "Moonlight Melody", image: "/assets/images/artist19.jpg" },
  { name: "Space Serenity", image: "/assets/images/artist20.jpg" },
  { name: "Nova Notes", image: "/assets/images/artist21.jpg" },
  { name: "Galaxy Groove", image: "/assets/images/artist22.jpg" },
  { name: "Supernova Symphony", image: "/assets/images/artist23.jpg" },
];

const Artist = () => {
  const renderRandomArtists = () => {
    return randomArtists.map((artist, index) => (
      <HoverCard key={index}>
        <HoverCardTrigger>
          <div className="bg-orange-400 py-2 px-4 text-lg font-bold tracking-tighter">
            <p>{artist.name}</p>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className=" border-none bg-none p-0 m-0 w-40 h-40">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-40 h-40 object-cover"
          />
        </HoverCardContent>
      </HoverCard>
    ));
  };

  return (
    <section>
      <div className="performers w-full flex justify-start items-center py-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter bg-orange-400 w-fit mb-6 p-3">
            Performers
          </h2>
          <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
            {renderRandomArtists()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
