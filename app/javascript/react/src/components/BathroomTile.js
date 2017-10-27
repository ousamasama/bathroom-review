import React from 'react';
import { Link } from 'react-router';

const BathroomTile = props => {
  if (props.searchAddress !== '') {
    return(
      <div className="bathroom-tile">
        <h3>{props.bathroom.establishment}</h3>
        <p className="tile-address">{props.bathroom.distance} miles away</p>
        <p className="tile-address">
          <a href={"https://www.google.com/maps/dir//" + props.bathroom.address} target="_blank">
            {props.bathroom.address}
          </a>
        </p>
        <p className="tile-rating">Rating: {props.bathroom.review_average}</p>
        <p className="tile-rating">Total Reviews: {props.bathroom.review_total}</p>
        <Link to={`/bathrooms/${props.bathroom.id}`}><div className="button secondary">See more</div></Link>
      </div>
    )
  } else {
     return(
      <div className="bathroom-tile">
        <h3>{props.bathroom.establishment}</h3>
        <p className="tile-address">{props.bathroom.address}</p>
        <p className="tile-rating">Rating: {props.bathroom.review_average}</p>
        <p className="tile-rating">Total Reviews: {props.bathroom.review_total}</p>
        <Link to={`/bathrooms/${props.bathroom.id}`}><div className="button secondary">See more</div></Link>
      </div>
    )
  }
}

export default BathroomTile;
