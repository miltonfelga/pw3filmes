import React, { useState } from 'react';
import "./Header.css";
import { withRouter, Link } from 'react-router-dom'
import Icon from "./pesquisa.png";
import miniLogo from '../../img/miniLogo.png';

function Header(props) {

    const [search, setSearch] = useState("");
        
    function buscar(e){
        e.preventDefault();
        props.history.push("/busca?query=" + search);
    }

    function home(){
        
    }

    return (
        <div className="Header">
            <Link to='/lancamentos' className='Logo'><img className="" src={miniLogo} alt="miniLogo"/></Link>            
            <div className="searchBar">
                <form onSubmit={ buscar}>
                    <input type="text" name="query" id="query" 
                    onChange={e => setSearch(e.target.value)}></input>
                    <button className="Pesquisa"><img src={Icon} alt="Icon" /></button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Header);