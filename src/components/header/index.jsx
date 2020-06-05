import React from 'react';
import "./Header.css";
import Icon from "./pesquisa.png";
import miniLogo from '../../img/miniLogo.png';

export default function Header(props) {
    return (
        <div className="Header">
            <img className="Logo" src={miniLogo} alt="miniLogo" />
            <div className="searchBar">
                <input type="text" name="search" id="search"></input>
                <button className="Pesquisa"><img src={Icon} alt="Icon" /></button>
            </div>
        </div>
    )
}
