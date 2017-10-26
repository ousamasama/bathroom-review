import React from 'react';
import { Link } from 'react-router';

const BathroomTile = props => {
  if (props.searchAddress !== '') {
    return(
      <div>
        <Link to={`/bathrooms/${props.bathroom.id}`}>
          <h3>{props.bathroom.establishment}</h3>
          <h4>{props.bathroom.address}</h4>
          <h4>Rating: {props.bathroom.review_average}</h4>
          <h4>Total Reviews: {props.bathroom.review_total}</h4>
          <h4>Distance: {props.bathroom.distance} miles</h4>
        </Link>
      </div>
    )
  } else {
    return(
      <div>
        <Link to={`/bathrooms/${props.bathroom.id}`}>
          <h3>{props.bathroom.establishment}</h3>
          <h4>Rating: {props.bathroom.review_average}</h4>
          <h4>Total Reviews: {props.bathroom.review_total}</h4>
          <h4>{props.bathroom.address}</h4>
        </Link>
      </div>
    )
  }

}

export default BathroomTile;
