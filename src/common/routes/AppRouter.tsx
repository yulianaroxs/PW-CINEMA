import React from "react";
import { Routes, Route, Navigate } from 'react-router';
import { Billboard } from "../../modules/components/Billboard/Billboard.tsx";
import { Header } from "../../modules/components/Header/Header";
//import { FilmDetail } from "../../modules/components/FilmDetail/FilmDetail.tsx";

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Billboard />} />
     {/*      <Route path="/film/:filmId" element={<FilmDetail />} /> */}
        </Routes>
    </>
  );
};
