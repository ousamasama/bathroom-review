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
    <div className="review-tile">
      <img src={props.profilePhoto} className="profile-thumbnail"/>
      <h3>{firstLine}</h3>
      <h4>Rating: {props.rating}</h4>
      <div className="inner-text">
        <p>{props.body}</p>
      </div>
      <p className="rate-text">Rate this review</p>
      <UpvoteDownvote
        currentUser={props.currentUser}
        votes={props.votes}
        review={props.id}
        />
    </div>
  )
}

export default ReviewTile;
