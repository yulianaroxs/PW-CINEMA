import React from "react";
import "./Billboard.css";
import { FilmCard } from "../FilmCard/FilmCard";


export const Billboard = () => {
  const filmsList = [
    { src: "./img/barbie.webp", alt: "Barbie" },
    { src: "./img/amanecer-movie.webp", alt: "Amanecer" },
    { src: "./img/crepusculo.webp", alt: "Crepusculo" },
    { src: "./img/intensamente-movie.webp", alt: "Intensamente" },
    { src: "./img/up-movie.jpg", alt: "Up" },
    { src: "./img/garfield.jpg", alt: "Garfield" },
  ];

  return (
    <section>
      <div className="container-films">
        <ul className="films">
          {filmsList.map((film, index) => (
            <li key={index}>
                <FilmCard src={film.src} alt={film.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
