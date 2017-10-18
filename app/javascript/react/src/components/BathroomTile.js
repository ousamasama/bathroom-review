import React from 'react';
import { Link } from 'react-router';

const BathroomTile = props => {
  return(
    <div>
      <Link to={`/bathrooms/${props.bathroom.id}`}>
      <h3>{props.bathroom.establishment}</h3>
      <h4>{props.bathroom.address}</h4></Link>
    </div>
  )
}

export default BathroomTile;
