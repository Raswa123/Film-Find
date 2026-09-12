import "./App.css";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

import Home from "./assets/components/Pages/Home";
import MovieResults from "./assets/components/Pages/MovieResults";
import MovieDetails from "./assets/components/Pages/MovieDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies"
          element={<MovieResults />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;