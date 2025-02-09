import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/socialIMG.jpg",
      title: "Weddings, Birthday Parties, and Family Reunions are highly popular for personal celebrations.",
    },
    {
      id: 2,
      url: "/entertainIMG.jpg",
      title: "Concerts, Music Festivals, and Theater performances consistently draw large audiences.",
    },
    {
      id: 3,
      url: "/corporImage.jpg",
      title: "Conferences, Seminars, and Meetings are staple gatherings in the business world."
    },
    {
      id: 4,
      url: "/fundRaisIMG.webp",
      title: "Charity Galas and Benefit Concerts are common approaches to support causes and non-profits."

    },
    {
      id: 5,
      url: "/virtualIMG.jpg",
      title: "Online Conferences, Webinars, and Hybrid Events that seamlessly blend in-person and digital interactions are highly popular for global professional engagements.",
    },
    {
      id: 6,
      url: "/fitnessIMG.webp",
      title: " Marathons, Tournaments, and Fitness challenges are frequently held, engaging community and athletic participation.",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;