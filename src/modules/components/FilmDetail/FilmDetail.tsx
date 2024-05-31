import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { films } from "../../../Data/filmsData.ts";
import "./FilmDetail.css";

export const FilmDetail: React.FC = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const film = films.find((f) => f.id === Number(filmId));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState("");
  const [numTickets, setNumTickets] = useState(0);

  const openModal = (func: string) => {
    setSelectedFunction(func);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedFunction("");
    setModalVisible(false);
    setNumTickets(0);
  };

  const incrementTickets = () => {
    if (numTickets < 10) {
      setNumTickets((prev) => prev + 1);
    }
  };

  const decrementTickets = () => {
    if (numTickets > 0) {
      setNumTickets((prev) => prev - 1);
    }
  };

  if (!film) {
    return <div>Filme no encontrado :/</div>;
  }

  return (
    <div className="container-filmdetails">
      <div className="container-details">
        <h1>{film.title}</h1>
        <p className="details-description">{film.description}</p>
        <div className="container-functions">
          <p>Funciones</p>
          <div>
            <p>sala 2d ingles subititulado</p>
            <div>
              <span onClick={() => openModal("2:00 PM")}>2:00 PM</span>
              <span onClick={() => openModal("4:00 PM")}>4:00 PM</span>
              <span onClick={() => openModal("7:00 PM")}>7:00 PM</span>
            </div>
          </div>
          <div className="container-function">
            <p>sala 3d español</p>
            <div>
              <span onClick={() => openModal("3:00 PM")}>3:00 PM</span>
              <span onClick={() => openModal("5:00 PM")}>5:00 PM</span>
              <span onClick={() => openModal("7:00 PM")}>7:00 PM</span>
              <span onClick={() => openModal("9:00 PM")}>9:00 PM</span>
            </div>
          </div>
          <div className="container-function">
            <p>sala 3d ingles subtitulado</p>
            <div>
              <span onClick={() => openModal("3:00 PM")}>3:00 PM</span>
              <span onClick={() => openModal("6:00 PM")}>6:00 PM</span>
              <span onClick={() => openModal("8:00 PM")}>8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <figure className="container-img">
        <img src={film.src} alt={film.title} />
      </figure>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Adquiere tus boletos</h2>
            <div className="info-container">
              <div className="film-info">
                <figure>
                  <img src={film.src} alt={film.title} />
                </figure>
                <div className="film-title">
                  <h4>{film.title}</h4>
                  <div>
                    <p>
                      Genero: <span>{film.movieGenre}</span>
                    </p>
                    <p>
                      Duración: <span>{film.duration}min</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="function-info">
                <p>Cine: Tec de Culiacan</p>
                <p>Función seleccionada: {selectedFunction}</p>
                <p>Seleccione el numero de boletos</p>
                <div className="select-tickets">
                  <button onClick={decrementTickets}>-</button>
                  <span>{numTickets}</span>
                  <button onClick={incrementTickets}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
