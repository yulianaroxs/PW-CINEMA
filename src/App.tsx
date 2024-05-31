import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./modules/components/Header/Header.tsx";
import { AppRouter } from "./common/routes/AppRouter.tsx";
import { Billboard } from "./modules/components/Billboard/Billboard.tsx";
import { Footer } from "./modules/components/Footer/Footer.tsx";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;
