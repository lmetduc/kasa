import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.css';

const ColoredStar = () => {
    return <FontAwesomeIcon icon={faStar} className="star"/>
}

const EmptyStar = () => {
    return <FontAwesomeIcon icon={faStar} className="star-empty"/>
}

export default function Rating(props) {

    return (
        <div className="rating">
            {Array.from({length: parseInt(props.rating)}, (v, idx) => <ColoredStar key={'colored-' + idx}/>)}
            {Array.from({length: 5 - parseInt(props.rating)}, (v, idx) => <EmptyStar key={'empty-' + idx}/>)}
        </div>
    )
};