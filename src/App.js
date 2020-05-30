import React from 'react';
import logo from './logo.svg';
import './css/App.css';


import Header from "./components/header";
import Card from "./components/CardSeries/CardSeries";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="logoTitle">CoronaVidios</h1>
      <div className="conteudo">
        <Card />
      </div>
    </div>
  );
}

export default App;
