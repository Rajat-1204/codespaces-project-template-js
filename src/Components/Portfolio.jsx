/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/port.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MNNIT KI DUKAN",
    description:
      "MNNIT KI DUKAN is a website that provides college students with the opportunity to sell and buy old stuff.",
    url: "https://mnnit-ki-dukan.onrender.com",
  },
  {
    title: "Fil Flavours",
    description:
      "Film Flavours is a  dynamic and user-friendly movie review website designed to cater to cinephiles and casual moviegoers alike, in collaboration with a teammate.",
    url: "https://filmflavours.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "The Weather App is an interactive application designed to provide users with real-time weather information for any city they input.",
    url: "https://weather-app-xi-olive.vercel.app/",
  },
  {
    title: "Doctor Appointment",
    description:
      "The Doctor Appointment Web App is an efficient platform designed to streamline the process of booking medical appointments.",
    url: "https://doctor-appointment-8a18.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "120%", width: "120%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
