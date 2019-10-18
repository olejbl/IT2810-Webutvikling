import React, { useState, useEffect } from 'react';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import SearchBar from "./components/SearchBar";
import ListView from "./components/ListView";
import store from "./store";

const apiUrl = 'https://api.themoviedb.org/3'
// /movie/550?api_key=f51e6992d22392e91a2fe35d26f556e2
// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f51e6992d22392e91a2fe35d26f556e2

export default function App() {
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f51e6992d22392e91a2fe35d26f556e2`)
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(json => json.results)
      .then(results => {
        return results.map((result) => {
          return {
            title: result.title,
            posterUrl: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
            year: result.release_date,
            rating: result.vote_average,
            plot: result.overview,
          }
        })
      })
      .then(mappedMovies => setLoadedMovies(mappedMovies))
  }, [])

  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <ListView movies={loadedMovies} />
        </header>
        <SearchBar/>
      </div>
    </Provider>
  );
}