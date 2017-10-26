import React from 'react';
import { Link } from 'react-router';
import UpvoteDownvote from '../containers/UpvoteDownvote'

const ReviewTile = props => {
  let firstLine;
  if (props.city == null || props.state == null) {
    firstLine = `${props.username} - ${props.createdAt}`
  } else {
    firstLine = `${props.username} - ${props.city}, ${props.state} - ${props.createdAt}`
  }

  return(
    <div>
      <img src={props.profilePhoto} className="profile-thumbnail"/>
      <h3>{firstLine}</h3>
      <UpvoteDownvote
        currentUser={props.currentUser}
        review={props.id}
      />
      <p className="review-rating"><strong>{props.rating}</strong></p>
      <p className="review-body">{props.body}</p>
    </div>
  )
}

export default ReviewTile;
