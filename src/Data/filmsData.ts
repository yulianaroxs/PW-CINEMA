import { Film } from "../models/Film.ts";

export const films: Film[] = [
    new Film(
        1,
        "Barbie",
        "Una historia mágica sobre Barbie",
        120,
        "Animación",
        "/img/barbie.webp"
      ),
      new Film(
        2,
        "Amanecer",
        "La épica conclusión de la saga",
        130,
        "Drama",
        "/img/amanecer-movie.webp"
      ),
      new Film(
        3,
        "Crepusculo",
        "Una historia de amor entre una humana y un vampiro",
        122,
        "Romance",
        "/img/crepusculo.webp"
      ),
      new Film(
        4,
        "Intensamente",
        "Las emociones cobran vida en esta película animada",
        95,
        "Animación",
        "/img/intensamente-movie.webp"
      ),
      new Film(
        5,
        "Up",
        "Un anciano y un niño exploran el mundo en una casa voladora",
        96,
        "Aventura",
        "/img/up-movie.jpg"
      ),
      new Film(
        6,
        "Garfield",
        "Las aventuras del gato más famoso del mundo",
        80,
        "Comedia",
        "/img/garfield.jpg"
      ),

];