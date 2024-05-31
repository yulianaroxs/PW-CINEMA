import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./modules/components/Header/Header.tsx";
import { AppRouter } from "./common/routes/AppRouter.tsx";
import { Billboard } from "./modules/components/Billboard/Billboard.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
