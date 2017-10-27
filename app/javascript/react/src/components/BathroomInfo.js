import React from 'react';

const BathroomInfo = props => {

  let ratingsImages = []
  let step
  let fullNumber = Math.floor(props.rating)
  for (step = 0; step < fullNumber; step++) {
    ratingsImages.push(
      <img key={step} src="../full-poop.png" className="poop"></img>
    )
  }
  if (Math.floor(props.rating) !== Math.round(props.rating)) {
    ratingsImages.push(
      <img key={step} src="../left-half-poop.png" className="poop"></img>
    )
  }

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
        <a href={`https://www.google.com/maps/place/${props.bathroomInfo.address}+${props.bathroomInfo.city}+${props.bathroomInfo.state}+${props.bathroomInfo.zip}/`} target="_blank">
          <p>{props.bathroomInfo.address}</p>
          <p>{props.bathroomInfo.city}, {props.bathroomInfo.state} {props.bathroomInfo.zip}</p>
        </a>
        <p>Gender: {props.bathroomInfo.gender}</p>
        <h4>{ratingsImages}</h4>
      </ul>
      {deleteDiv()}
    </div>
  )
}

export default BathroomInfo;
