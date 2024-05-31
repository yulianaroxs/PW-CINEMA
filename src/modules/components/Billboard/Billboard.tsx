import React from "react";
import { useNavigate } from "react-router-dom";
import "./Billboard.css";
import { FilmCard } from "../FilmCard/FilmCard.tsx";
import { films } from "../../../Data/filmsData.ts";

export const Billboard:React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/film/${id}`);
  };

  return (
    <section>
      <div className="container-films">
        <ul className="films">
          {films.map((film, index) => (
            <li key={film.id} onClick={() => handleCardClick(film.id)}>
              <FilmCard src={film.src} alt={film.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
