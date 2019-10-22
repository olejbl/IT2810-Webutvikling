import React from 'react';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import SearchBar from "./components/SearchBar";
import ListView from "./components/list-view.js";
import Database from "./components/database-connect.js";
import  "./components/list-view.css";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
              <ListView></ListView>
              </header>
                  <Database></Database>
              <SearchBar/>
          </div>
      </Provider>
  );
}

export default App;
