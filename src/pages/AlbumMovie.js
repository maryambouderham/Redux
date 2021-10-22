import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../component/Header";
import film from "../data/Film"
import MovieList from "../component/MovieList";


const AlbumMovie = () => {
  const [movies, setMovies] = useState(film);

  const [listBackup, setListBackup] = useState(film);
  const handleKeyPressOn = (d) => {
    if (d !== "") {
      const results = movies.filter((t) => t.title.toLowerCase().includes(d));

      setMovies([...results]);
    } else setMovies([...listBackup]);
  };
  const DeleteMovie = (t) => {
    console.log(t);
    const newarray = movies.filter((c) => c.id !== t);

    setMovies([...newarray]);
    setListBackup([...newarray]);
  };
  return (
    <div>
      <Header handleKeyPress={handleKeyPressOn} />
      <main>
        <MovieList listMovies={movies} OnClickDeleteMovie={DeleteMovie} />
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-dark d-inline-flex p-2 bd-highlight "

          > <Link to="/addMovie">
            ADD MOVIE
            <i className="fas fa-video-plus" /></Link>
          </button>
        </div>
      </main>
     
    </div>
  );
};

export default AlbumMovie;
