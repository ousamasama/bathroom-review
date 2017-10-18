import React from 'react';

const BathroomInfo = props => {
  return(
    <div>
      <h1>{props.bathroomInfo.establishment}</h1>
      <ul>
        <p>{props.bathroomInfo.address}</p>
        <p>{props.bathroomInfo.city}, {props.bathroomInfo.state} {props.bathroomInfo.zip}</p>
        <p>{props.bathroomInfo.gender}</p>
      </ul>
    </div>
  )
}

export default BathroomInfo;
