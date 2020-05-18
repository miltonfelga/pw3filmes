import React from 'react';
import "./Header.css";
import Icon from "./pesquisa.png";

export default function Header(props) {
    return (
        <div className="Header">
            <div className="Logo">CoronaVideos</div>
            <div className="searchBar">
                <input type="text" name="search" id="search"></input>
                <button className="Pesquisa"><img src={Icon} alt="Icon" /></button>
            </div>
        </div>
    )
}
