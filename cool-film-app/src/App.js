import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Provider from "react-redux/lib/components/Provider"
import SearchBar from "./components/SearchBar"
import ListView from "./components/ListView"
import store from "./store"

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: white;
  font-size: calc(10px + 2vmin);
`

const apiUrl = 'https://api.themoviedb.org/3'
// /movie/550?api_key=f51e6992d22392e91a2fe35d26f556e2
// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f51e6992d22392e91a2fe35d26f556e2

export default function App() {
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/discover/movie?primary_release_date.gte=2019-08-01&primary_release_date.lte=2019-10-18&api_key=f51e6992d22392e91a2fe35d26f556e2`)
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
      <Container>
        <ListView movies={loadedMovies} />
        <SearchBar/>
      </Container>
    </Provider>
  );
}