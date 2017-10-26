import React from 'react';

const BathroomInfo = props => {

  let deleteDiv = () => {
    if (props.handleDelete) {
      let handleButtonClick = () => props.handleDelete(props.id)
      return(
        <div className="button alert" onClick={handleButtonClick}>Delete Bathroom</div>
      )
    }
  }




  return(
    <div className="bathroom-info-div">
      <h1>{props.bathroomInfo.establishment}</h1>
      <ul>
        <p className="show-address">{props.bathroomInfo.address} - {props.bathroomInfo.city}, {props.bathroomInfo.state}</p>
        <p>{props.bathroomInfo.gender}</p>
      </ul>
      {deleteDiv()}
    </div>
  )
}

export default BathroomInfo;
