import React from 'react';
import './App.css';
import { Header } from './modules/components/Header/Header.tsx';
import { AppRouter } from './common/routes/AppRouter.tsx';
import { Billboard } from './modules/components/Billboard/Billboard.tsx';
import { Footer } from './modules/components/Footer/Footer.tsx';

const App = () => {
  return (
    <>
    <Header/>
    <Billboard/>
    <Footer/>
    </>
  );
};

export default App;
