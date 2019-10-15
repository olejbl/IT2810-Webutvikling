import React from 'react';
import logo from './logo.svg';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import SearchBar from "./components/SearchBar";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
              </header>
              <SearchBar/>
          </div>
      </Provider>
  );
}

export default App;
