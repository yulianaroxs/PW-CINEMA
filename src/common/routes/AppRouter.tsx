import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Billboard } from "../../modules/components/Billboard/Billboard.tsx";
import { Header } from "../../modules/components/Header/Header";
import { FilmDetail } from "../../modules/components/FilmDetail/FilmDetail.tsx";
import { Footer } from "../../modules/components/Footer/Footer.tsx";

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Billboard />} />
          <Route path="/film/:filmId" element={<FilmDetail />} />
          <Route path="/contact" element={""} />
        </Routes>
    </>
  );
};
