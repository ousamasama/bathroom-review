import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  let firstLine;
  if (props.city == null && props.state == null) {
    firstLine = `${props.username} - ${props.created_at}`
  } else if (props.city == null && props.state !== null) {
    firstLine = `${props.username} - ${props.created_at}`
  } else if (props.city !== null && props.state == null) {
    firstLine = `${props.username} - ${props.created_at}`
  } else {
    firstLine = `${props.username} - ${props.city}, ${props.state} - ${props.created_at}`
  }

  return(
    <div>
      <h3>{firstLine}</h3>
      <p className="review-rating"><strong>{props.rating}</strong></p>
      <p className="review-body">{props.body}</p>
    </div>
  )
}

export default ReviewTile;
