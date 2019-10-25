import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Provider from "react-redux/lib/components/Provider"
import SearchBar from "./components/SearchBar"
import ListView from "./components/ListView"
import store from "./store"
import Navbar from "./components/Navbar"


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
                return data.map((result, index) => {
                        var url = window.location.href;
                        var params = url.split('?search=');
                        var searchvalue = params[1];
                        // Liten workaround når siden lastes inn og det ikke er noe definert i paramsene så appen ikke kræsjer.
                        if (searchvalue == undefined) {
                            searchvalue = "";
                        }

                        //fjerner + fra parameterne så det matcher movie.title og blir %3A ved : så endrer det tilbake' tar bort # fra store delen også.
                        for (var i = 0; i < searchvalue.length; i++) {
                            searchvalue = searchvalue.replace("+", " ");
                            searchvalue = searchvalue.replace("%3A", ":");
                            searchvalue = searchvalue.replace("#", "");
                        }
                        if (result.title.toUpperCase().includes(searchvalue.toUpperCase())) {

                            return {
                                title: result.title,
                                posterUrl: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
                                year: result.release_date,
                                _id: result._id,
                                rating: result.score,
                                plot: result.overview,
                            }
                        }
                    }
                )
            })
            .then(mappedMovies => {
                var filtered = mappedMovies.filter(function (el) {
                    return el != null;
                });
                return filtered
            })
            .then(filtered => setLoadedMovies(filtered))
    }, []); // TODO: add query string state to dependency array to the left

    return (
        <Provider store={store}>
            <Navbar/>
            <Container>
                <ListView movies={loadedMovies}/>
            </Container>
        </Provider>
    );
}
