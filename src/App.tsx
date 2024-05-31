import React from 'react';
import './App.css';
import { Header } from './modules/components/Header/Header.tsx';
import { AppRouter } from './common/routes/AppRouter.tsx';
import { Billboard } from './modules/components/Billboard/Billboard.tsx';

const App = () => {
  return (
    <>
    <Header/>
    <Billboard/>
    </>
  );
};

export default App;
