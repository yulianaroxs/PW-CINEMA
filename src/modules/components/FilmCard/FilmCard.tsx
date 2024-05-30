import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FilmCard.css";

export const FilmCard = ({ src, alt }) => {

    const handleClick = () =>{
        
    }

  return (
    <div className="film__card">
      <img src={src} alt={alt} />
    </div>
  );
};
