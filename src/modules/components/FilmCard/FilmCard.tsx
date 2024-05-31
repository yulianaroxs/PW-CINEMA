import React from "react";
import "./FilmCard.css";

export const FilmCard = ({ src, alt }) => {
  return (
    <div className="film__card">
      <img src={src} alt={alt} />
    </div>
  );
};
