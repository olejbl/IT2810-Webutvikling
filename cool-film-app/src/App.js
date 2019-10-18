import React from 'react';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import SearchBar from "./components/SearchBar";
import ListView from "./components/ListView";
import store from "./store";
import { movies } from './assets/movies.js';

function App() {
  return (
      <Provider store={store}>
        <div className="container">
            <header className="header">
                <ListView movies={movies} />
            </header>
            <SearchBar/>
          </div>
      </Provider>
  );
}

export default App;
