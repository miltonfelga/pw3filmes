import React, { Fragment, useEffect, useState } from 'react';
import api, { api_options } from '../../services/api';

import './Detalhe.css';

import CardTemporada from '../../components/CardTemporada/CardTemporada'

export default function Deatalhe(props) {
    const { serieId } = props.match.params;
    const [detalhe, setDetalhe] = useState([]);
    const [genres, setGenres] = useState([]);
    const [temporadas, setTemp] = useState([]);
    const imgBaseUrl = 'http://image.tmdb.org/t/p/w300';
    const imgBackUrl = 'http://image.tmdb.org/t/p/original';
    const data = new Date(detalhe.first_air_date);
    const data_lancamento = data.toLocaleDateString()

    if (detalhe.overview === "") detalhe.overview = "Sem Descrição";

    useEffect(() => { load(); }, []);

    async function load() {
        try {
            const resposta = await api.get(`/tv/${serieId}`, api_options());
            setDetalhe(resposta.data);
            setGenres(resposta.data.genres);
            setTemp(resposta.data.seasons);
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
                    <div className='image'>
                        <img src={`${imgBaseUrl}${detalhe.poster_path}`} alt='poster' />
                        <h5 className='genres'>
                            {genres.map(genero => { return genero.name + ' | ' })}
                        </h5>
                    </div>
                    <div>
                        <div className='info'>
                            <h2 id='titulo'>{detalhe.name}</h2>
                            <span className="material-icons">star</span>
                            <h4>{detalhe.vote_average}</h4> <h4>{data_lancamento}</h4>
                        </div>
                        <h3>SINOPSE</h3>
                        <p className='desc'>{detalhe.overview}</p>
                    </div>
                </div>
            </div>
            
            <section>
                {temporadas.map((temporada) => (<CardTemporada temporada={temporada} />))}
            </section>

        </Fragment>
    );
}