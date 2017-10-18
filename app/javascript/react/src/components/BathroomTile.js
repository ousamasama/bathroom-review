import React from 'react';

const BathroomTile = props => {
  return(
    <div>
      <h3>{props.bathroom.establishment}</h3>
      <h4>{props.bathroom.address}</h4>
    </div>
  )
}

export default BathroomTile;
