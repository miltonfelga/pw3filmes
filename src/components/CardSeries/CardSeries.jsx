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

export function Card() {
    return (
        <div className='cardSerie' onClick={window.location = '#'}>
            <div>
                <div className='posterCardImage'>
                    <div className="imageText">
                    <h1>Game Of Thrones</h1>
                    </div>
                </div>
                <div className='cardDetail'>
                    <span className="material-icons">star</span>
                    10
                </div>
            </div>
        </div>
    )
}

