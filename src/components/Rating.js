/* import "../styles/Rating.css";

export default function Rating(props) {
    const rating = props.rating;
    return (
      <div className="kasa-rating">
        <img src={rating} alt="Kasa Rating" className="kasa-stars" />
      </div>
    );
  } */

  
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/Rating.css';

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