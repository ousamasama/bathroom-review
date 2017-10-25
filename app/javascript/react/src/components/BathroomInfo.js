import React from 'react';

const BathroomInfo = props => {
  return(
    <div className="bathroom-info-div">
      <h1>{props.bathroomInfo.establishment}</h1>
      <ul>
        <p className="show-address">{props.bathroomInfo.address} - {props.bathroomInfo.city}, {props.bathroomInfo.state}</p>
        <p>{props.bathroomInfo.gender}</p>
      </ul>
    </div>
  )
}

export default BathroomInfo;
