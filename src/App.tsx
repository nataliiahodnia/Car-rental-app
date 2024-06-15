import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/Home";
import CatalogPage from "./pages/Catalog/Catalog";
import FavoritesPage from "./pages/Favorites/Favorites";
import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
