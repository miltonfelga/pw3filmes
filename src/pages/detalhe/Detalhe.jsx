import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';

import './Detalhe.css';


export default function Deatalhe(props) {
    const { serieId } = props.match.params;
    const [detalhe, setDetalhe] = useState([]);
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
    const imgBackUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => { load(); }, []);

    async function load() {
        try {
            const resposta = await api.get(`/tv/${serieId}`, api_options());
            setDetalhe(resposta.data);
            console.log(resposta.data);
        } catch (erro) {
            console.log(erro);
        }
    }



    return (
        <Fragment>
            <div className="hero">
                <div className='backImage' style={{ backgroundImage: `url(${imgBackUrl}${detalhe.backdrop_path})` }}></div>

                <button className="btn-back" onClick={props.history.goBack}>
                    <span className="material-icons">navigate_before</span>voltar
                </button>

                <div className='cardInfo'>
                    <img src={`${imgBaseUrl}${detalhe.poster_path}`} alt='poster' />
                    <div>
                        <div className='info'>
                            <h2 id='titulo'>{detalhe.name}</h2>
                            <span className="material-icons">star</span>
                            {detalhe.vote_average}
                        </div>
                        <h3>SINOPSE</h3>
                        <p id='desc'>{detalhe.overview}</p>
                    </div>
                </div>


            </div>
            <div className='cardTemp'>
                
                </div>

        </Fragment>
    );
}