import React from "react";
import { useParams } from "react-router-dom";
import { films } from "../../../Data/filmsData.ts";
import "./FilmDetail.css";

export const FilmDetail: React.FC = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const film = films.find((f) => f.id === Number(filmId));

  if (!film) {
    return <div>Filme no encontrado :/</div>;
  }

  return (
    <div className="container-filmdetails">
      <div className="container-details">
        <h1>{film.title}</h1>
        <p className="details-description">{film.description}</p>
        <p>Funciones</p>
        <div className="container-function">
          <p>sala 2d ingles subititulado</p>
          <div>
            <span>2:00 PM</span>
            <span>4:00 PM</span>
            <span>7:00 PM</span>
          </div>
        </div>
      </div>
      <figure className="container-img">
        <img src={film.src} alt={film.title} />
      </figure>
    </div>
  );
};
