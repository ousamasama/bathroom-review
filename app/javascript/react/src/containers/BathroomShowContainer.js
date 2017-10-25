import React, { Component } from 'react'
import BathroomTile from '../components/BathroomTile'
import SearchBar from '../components/SearchBar'
import BathroomInfo from '../components/BathroomInfo'
import ReviewTile from '../components/ReviewTile'
import ReviewFormContainer from './ReviewFormContainer'

class BathroomShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      bathroomInfo: {},
      reviewInfo: [],
      user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  addNewReview(formPayload) {
    fetch(`/api/v1/reviews`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        reviewInfo: this.state.reviewInfo.concat(body.review)
      })
    })
  }

  componentDidMount(){
      let bathroomId = this.props.params.id
      fetch(`/api/v1/bathrooms/${bathroomId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          bathroomInfo: body.bathrooms,
          reviewInfo: body.reviews
         })
      })

      fetch(`/api/v1/users.json`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ user: body })
      })
    }

  render(){
    let reviews = this.state.reviewInfo;
    let parsed_reviews;
    if (reviews.length !== 0) {
      parsed_reviews = reviews.map(review => {
        return(
          <ReviewTile
            key={review.review_info.id}
            id={review.review_info.id}
            city={review.user_info.city}
            state={review.user_info.state}
            username={review.user_info.username}
            createdAt={review.review_created_at}
            rating={review.review_info.rating}
            body={review.review_info.body}
            profilePhoto={review.user_info.profile_photo.url}
            currentUser={this.state.user}
            votes={review.review_votes}
          />
        )
      })
    }

    return(
      <div className="grid-container">
        <BathroomInfo
          bathroomInfo={this.state.bathroomInfo}
        />
        <ReviewFormContainer
          bathroomInfo={this.state.bathroomInfo}
          addReview={this.addNewReview}
        />
        {parsed_reviews}
      </div>
    )
  }

}

export default BathroomShowContainer;
