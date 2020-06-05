import React from 'react';
import './CardSeries.css'

export default function CardSerie() {
    return (
        <div className='cardSerie' onClick={window.location = '#'}>
            <div>
                <div className='posterImage'>
                    <div className="imageText">
                    <h1>Flash</h1>
                    </div>
                </div>
                <div className='cardDetail'>
                    <span className="material-icons">star</span>
                    9,5
                </div>
            </div>
        </div>
    )
}