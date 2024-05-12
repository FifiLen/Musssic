import React from "react";

const timelineData = [
  {
    year: 1972,
    event:
      "The Mussick Festival was conceived by a group of passionate music lovers from Warsaw. This was the year that sparked a movement, turning a simple gathering into an iconic event that celebrated the fusion of traditional and contemporary music styles.",
  },
  {
    year: 1979,
    event:
      "This year marked the festival's first major breakthrough, attracting audiences from across the country with headline performances that are still talked about today. The festival's commitment to showcasing underground artists brought a fresh vibe to the music scene.",
  },
  {
    year: 1984,
    event:
      "1984 was a year of innovation for the Mussick Festival, as it introduced new genres and digital music technology to its stages. This pivot played a crucial role in redefining the musical landscape of Eastern Europe.",
  },
  {
    year: 1992,
    event:
      "Celebrating its 20th anniversary, the festival expanded its reach globally, inviting artists from all continents. This year was a testament to its growth and the universal language of music, promoting peace and unity.",
  },
  {
    year: 2006,
    event:
      "In 2006, Mussick Festival transformed into a platform for not only music but also for visual arts and cultural exhibitions, blending various forms of artistic expression.",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h2>{item.year}</h2>
            <p>{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
