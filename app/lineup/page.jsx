import React from "react";
import { Monoton } from "next/font/google";
import { SiDailydotdev } from "react-icons/si";

const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });

const randomArtists = [
  { name: "EchoVerse" },
  { name: "EchoWaves" },
  { name: "Sapphire Soul" },
  { name: "The Starlight Serenade" },
  { name: "Midnight Mirage" },
  { name: "Celestial Symphony" },
  { name: "Lunar Lullaby" },
  { name: "Aurora Borealis" },
  { name: "Galactic Groove" },
  { name: "Stellar Sirens" },
  { name: "Nebula Nova" },
  { name: "Cosmic Cadence" },
  { name: "Solar Serenade" },
  { name: "Celestial Choir" },
  { name: "Orion's Odyssey" },
  { name: "Astral Harmony" },
  { name: "Eclipse Ensemble" },
  { name: "Starshine Sonata" },
  { name: "Infinity Ensemble" },
  { name: "Moonlight Melody" },
  { name: "Space Serenity" },
  { name: "Nova Notes" },
  { name: "Galaxy Groove" },
  { name: "Supernova Symphony" },
];

const LineupDay = ({ title, artists }) => {
  return (
    <div className="flex flex-col items-center tracking-tighter font-medium text-white mb-8">
      <h2 className="text-6xl font-extrabold mb-8 text-orange-400 tracking-tighter">
        {title}
      </h2>
      <div className="text-xl flex flex-wrap justify-center items-center">
        {artists.map((artist, index) => (
          <React.Fragment key={index}>
            <span className="p-2 text-center tracking-tighter">
              {artist.name}
            </span>
            {index < artists.length - 1 && (index + 1) % 6 !== 0 && (
              <SiDailydotdev className="text-orange-500 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const LineupPage = () => (
  <div className="bg-gradient-to-b from-black via-black to-orange-400 min-h-screen flex flex-col items-center pt-52 pb-40">
    <header className="text-white mb-12 text-center">
      <h1 className="text-[5.5rem] font-bold tracking-tighter text-orange-400">
        <span className={` ${monoton.className}  text-white`}>
          musssick<span className=" text-orange-400">.</span>
        </span>{" "}
        Festival
      </h1>
      <p className="text-4xl mt-4 tracking-tighter font-bold text-white">
        7-9.08.2024 WARSAW
      </p>
    </header>
    <main className="w-full max-w-6xl">
      <LineupDay title="FRIDAY 7" artists={randomArtists.slice(0, 8)} />
      <LineupDay title="SATURDAY 8" artists={randomArtists.slice(8, 16)} />
      <LineupDay title="SUNDAY 9" artists={randomArtists.slice(16, 23)} />
    </main>
  </div>
);

export default LineupPage;
