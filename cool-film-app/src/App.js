import React from 'react';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import SearchBar from "./components/SearchBar";
import ListView from "./components/list-view.js";
import  "./components/list-view.css";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
              <ListView></ListView>
              </header>
              <SearchBar/>
          </div>
      </Provider>
  );
}

export default App;
