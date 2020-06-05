import React from 'react';
import logo from './logo.svg';
import './css/App.css';

import miniLogo from './img/miniLogo.png';

import Header from "./components/header";
import Card from "./components/CardSeries/CardSeries";

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="conteudo">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
