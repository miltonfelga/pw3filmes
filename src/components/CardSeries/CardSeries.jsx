import React from 'react';
import './CardSeries.css'

export default function CardSerie({ serie }) {
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    return (
        <div className='cardSerie'>
            <div>
                <div className='posterImage' style={ {backgroundImage: `url(${imgUrl}${serie.poster_path})`}}>
                    <div className="imageText">
                        
                        <p>{serie.overview.substring(0, 80)}...</p>
                    </div>
                </div>
                <div className='cardDetail'>
                    <span className="material-icons">star</span>
                    {serie.vote_average}
                </div>
            </div>
        </div>
    )
}


