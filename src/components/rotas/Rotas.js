import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import {slide as Menu} from 'react-burguer-menu';

import './rotas.css';
import menuIcon from '../../img/menuIcon.png';
import flame from '../../img/flame.png';
import pipoca from '../../img/pipoca.png';


import Lancamentos from '../../pages/lancamentos/Lancamentos';
import Sobre from '../../pages/sobre/Sobre';
import emAlta from '../../pages/emAlta/emAlta';

export default function Rotas() {
    return (
        <BrowserRouter>
            <div className='sideMenu'>

                <input type='checkbox' id='check' />
                <label id='menuIcon' for='check'><img src={menuIcon} alt='menuIcon'/></label>
                <div className='menu'>
                    <h3>CATEGORIAS</h3>
                    <nav>
                        <Link to='/lancamentos' className='caminho'><img src={pipoca} alt='pipoca'/>Lançamentos</Link>
                        <Link to='/emAlta' className='caminho'><img src={flame} alt='flame'/>Em Alta</Link>                        
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path='/' component={Lancamentos} />
                <Route path='/lancamentos' component={Lancamentos} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/emAlta' component={emAlta} />
            </Switch>
        </BrowserRouter >
    );
}