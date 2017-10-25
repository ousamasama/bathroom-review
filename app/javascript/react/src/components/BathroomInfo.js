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
    <div>
      <h1>{props.bathroomInfo.establishment}</h1>
      <ul>
        <p>{props.bathroomInfo.address}</p>
        <p>{props.bathroomInfo.city}, {props.bathroomInfo.state} {props.bathroomInfo.zip}</p>
        <p>{props.bathroomInfo.gender}</p>
      </ul>
      {deleteDiv()}
    </div>
  )
}

export default BathroomInfo;
