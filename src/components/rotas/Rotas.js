import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import {slide as Menu} from 'react-burguer-menu';

import Header from "../header/Header";

import './rotas.css';
import menuIcon from '../../img/menuIcon.png';
import flame from '../../img/flame.png';
import pipoca from '../../img/pipoca.png';
import sobre from '../../img/react.png';


import Lancamentos from '../../pages/lancamentos/Lancamentos';
import Sobre from '../../pages/sobre/Sobre';
import emAlta from '../../pages/emAlta/emAlta';
import Busca from '../../pages/busca/Busca';
import Detalhe from '../../pages/detalhe/Detalhe';
import pT from '../../pages/pT/pT';

export default function Rotas() {

    return (
        <BrowserRouter>
            <Header />
            <div className='sideMenu' >
                <input type='checkbox' id='check' />
                <label id='menuIcon' htmlFor='check'>
                    < img src={menuIcon} alt='menuIcon' />
                </label>
                <div className='menu'>
                    <h3 > CATEGORIAS </h3>
                    <nav>
                        <Link to='/lancamentos' className='caminho' > Lançamentos </Link>
                        <Link to='/lancamentos' className='caminho' > <img src={sobre} alt='sobreIcon' /> Sobre o projeto </Link>
                        <Link to={`/pT/${16}`}  className='caminho' > Anime </Link>
                        <Link to={`/pT/${10762}`}  className='caminho' > Kids </Link>
                        <Link to={`/pT/${18}`}  className='caminho' > Drama </Link>
                        <Link to={`/pT/${9648}`}  className='caminho' > Suspense </Link>
                        <Link to={`/pT/${10764}`}  className='caminho' > Reality </Link>
                        <Link to={`/pT/${10751}`}  className='caminho' > Familia </Link>
                        <Link to={`/pT/${37}`}  className='caminho' > Faroeste </Link>
                        <Link to={`/pT/${80}`}  className='caminho' > Crime </Link>
                        <Link to={`/pT/${35}`}  className='caminho' > Comédia </Link>
                        <Link to={`/pT/${18}`}  className='caminho' > Ficção científica </Link>
                        <Link to={`/pT/${10766}`}  className='caminho' > Melodrama </Link>
                        <Link to={`/pT/${10759}`}  className='caminho' > Ação e aventura </Link>
                        <Link to={`/pT/${99}`}  className='caminho' > Documentários </Link>
                        <Link to={`/pT/${10767}`}  className='caminho' > Talk </Link>
                        <Link to={`/pT/${10768}`}  className='caminho' > Guerra e Politica </Link>
                        <Link to={`/pT/${0}`}  className='caminho' > +18 </Link>
                        <Link to={`/pT/${0}`}  className='caminho' > <img src={pipoca} alt='pipoca' />Mais<img src={pipoca} alt='pipoca' /> </Link>
                    </nav>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={Lancamentos} />
                <Route path='/lancamentos' component={Lancamentos} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/emAlta' component={emAlta} />
                
                <Route path='/pT/:genre' component={pT}/>
                <Route path='/busca' component={Busca} />
                <Route path='/detalhe/:serieId' component={Detalhe} />
            </Switch>
        </BrowserRouter >
    );
}