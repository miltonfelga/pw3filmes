import React, { Fragment } from 'react';

import './CardTemporada.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w200';

export default function CardTemporada({ temporada }) {
    return (
        <div className='card-temporada'>
            <img src={`${imgBaseUrl}${temporada.poster_path}`} alt='poster' />
            <div className='temporada-info'>
                <h3> {temporada.name}</h3>
                <p className='qtds-eps'> EPs {temporada.episode_count}</p>
                <p className='sinop-temp'> {temporada.overview} </p>
            </div>
        </div>
    )
}