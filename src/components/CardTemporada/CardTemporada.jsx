import React, { Fragment } from 'react';

import './CardTemporada.css';
import imgNF from '../../img/noimage.jpg'

const imgBaseUrl = 'https://image.tmdb.org/t/p/w200';
//const imgNF = 'https://bephoaphat.com/uploads/Image-not-found.gif'
//const imgNF = ''
//const imgNF = 'https://www.supersizefashion.com/assets/image/sample.jpg'

export default function CardTemporada({ temporada }) {
    return (
        <div className='card-temporada'>
            <img src={(temporada.poster_path != null ? `${imgBaseUrl}${temporada.poster_path}` : imgNF)} alt='poster' />
            <div className='temporada-info'>
                <h3> {temporada.name}</h3>
                <p className='qtds-eps'> EPs {temporada.episode_count}</p>
                <p className='sinop-temp'> {temporada.overview} </p>
            </div>
        </div>
    )
}

//`${imgBaseUrl}${temporada.poster_path}`