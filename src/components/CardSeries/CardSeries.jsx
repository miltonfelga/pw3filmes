import React from 'react';
import './CardSeries.css'

export default function CardSerie() {
    return (
        <div className='cardSerie' onClick={window.location='#'}>
            <div>
                <span className='material-icons'>favorit</span>
                <div className='posterImage'></div>
                <div className='cardDetail'>
                <span className="material-icons">star</span>
                    9,5
                    <h1>Flash</h1>
                </div>
            </div>
        </div>
    )
}