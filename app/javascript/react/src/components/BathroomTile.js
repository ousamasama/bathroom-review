import React from 'react';
import { Link } from 'react-router';

const BathroomTile = props => {

  let ratingsImages = []
  let step
  let fullNumber = Math.floor(props.bathroom.review_average)
  for (step = 0; step < fullNumber; step++) {
    ratingsImages.push(
      <img key={step} src="../full-poop.png" className="poop"></img>
    )
  }
  if (Math.floor(props.bathroom.review_average) !== Math.round(props.bathroom.review_average)) {
    ratingsImages.push(
      <img key={step} src="../left-half-poop.png" className="poop"></img>
    )
  }

  if (props.searchAddress !== '') {
    return(
      <div className="bathroom-tile">
        <h3>{props.bathroom.establishment}</h3>
        <p className="tile-address">{props.bathroom.distance} miles away</p>

        <p className="tile-address">
          <a href={"https://www.google.com/maps/dir//" + props.bathroom.address} target="_blank">
            {props.bathroom.address} - {props.bathroom.city}, {props.bathroom.state}
          </a>
        </p>
        <p>{ratingsImages}</p>
        <p className="tile-rating">Total Reviews: {props.bathroom.review_total}</p>
        <Link to={`/bathrooms/${props.bathroom.id}`}><div className="button secondary">See more</div></Link>
      </div>
    )
  } else {
     return(
      <div className="bathroom-tile">
        <h3>{props.bathroom.establishment}</h3>
        <p className="tile-address">{props.bathroom.address}</p>
        <p>{ratingsImages}</p>
        <p className="tile-rating">Total Reviews: {props.bathroom.review_total}</p>
        <Link to={`/bathrooms/${props.bathroom.id}`}><div className="button secondary">See more</div></Link>
      </div>
    )
  }
}

export default BathroomTile;
