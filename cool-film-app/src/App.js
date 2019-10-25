import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Provider from "react-redux/lib/components/Provider"
import SearchBar from "./components/SearchBar"
import ListView from "./components/ListView"
import store from "./store"
import Navbar from "./components/Navbar"

fetch('http://localhost:3001/movies')
.then(result => {
return result.json();
})
.then(data => {
console.log(data)
})

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: calc(12px + 2vmin);
  font-family: arial;
`;

const apiUrl = 'https://api.themoviedb.org/3';
// /movie/550?api_key=f51e6992d22392e91a2fe35d26f556e2
// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f51e6992d22392e91a2fe35d26f556e2

export default function App() {
  const [loadedMovies, setLoadedMovies] = useState([]);
  // TODO: state for query string here

  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then(result => {
    return result.json();
    })
    .then(data => {
      console.log(data)
        return data.map((result) => {
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
  }, []); // TODO: add query string state to dependency array to the left

  return (
    <Provider store={store}>
      <Navbar />
      <Container>
        <ListView movies={loadedMovies} />
      </Container>
    </Provider>
  );
}
