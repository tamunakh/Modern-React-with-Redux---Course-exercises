import React from 'react';
import {getSeason, seasonConfig} from './helpers/seasons';
import './SeasonDisplay.css'

const SeasonDisplay = (props) => {
    const season = getSeason (props.latitude, new Date().getMonth());
    const { message, imgUrl } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <img src={imgUrl} alt=""/>
            <div className="message-wrapper">
                <h1>{message}</h1>
            </div>
        </div>
    )
};

export default SeasonDisplay;