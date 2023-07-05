import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/HomePage/Home";
import MovieList from "./MovieList/MovieList";
import Movie from "./components/Pages/MovieDetails/MovieDetail";
import ContactForm from "./components/ContactPage/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element = {<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="/*"  element={<h1>Oops you have entered in wrong page!</h1>}></Route>
        <Route path="/contact" element={<ContactForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
