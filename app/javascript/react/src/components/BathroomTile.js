import React from 'react';
import { Link } from 'react-router';

const BathroomTile = props => {
  return(
    <div className="bathroom-tile">
      <h3>{props.bathroom.establishment}</h3>
      <p className="tile-address">1.2 miles - {props.bathroom.address}</p>
      <p className="tile-rating">Rating</p>
      <Link to={`/bathrooms/${props.bathroom.id}`}><div className="button secondary">See more</div></Link>
    </div>
  )
}

export default BathroomTile;
