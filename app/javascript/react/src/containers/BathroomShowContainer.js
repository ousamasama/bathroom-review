import React, { Component } from 'react'
import BathroomTile from '../components/BathroomTile'
import SearchBar from '../components/SearchBar'
import BathroomInfo from '../components/BathroomInfo'
import ReviewTile from '../components/ReviewTile'

class BathroomShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      bathroomInfo: {},
      reviewInfo: []
    }
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
    }

  render(){
    let reviews = this.state.reviewInfo;
    let parsed_reviews;
    if (reviews.length !== 0) {
      parsed_reviews = reviews.map(review => {
        return(
          <ReviewTile
            key={review.review_info.id}
            city={review.user_info.city}
            state={review.user_info.state}
            username={review.user_info.username}
            created_at={review.review_created_at}
            rating={review.review_info.rating}
            body={review.review_info.body}
            profile_photo={review.user_info.profile_photo.url}
          />
        )
      })
    }

    return(
      <div>
        <BathroomInfo
          bathroomInfo={this.state.bathroomInfo}
        />
        {parsed_reviews}
      </div>
    )
  }

}

export default BathroomShowContainer;
