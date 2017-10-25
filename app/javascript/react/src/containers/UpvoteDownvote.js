import React, { Component } from 'react'

class UpvoteDownvote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUserVote: 0,
      netVotes: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let currentUserVote;
    let netVotes = this.state.netVotes
    if (event.target.className.split(" ")[1] === "fa-thumbs-down") {
      if (this.state.currentUserVote === 0) {
        currentUserVote = -1
        netVotes += -1
      } else if (this.state.currentUserVote === 1) {
        currentUserVote = -1
        netVotes += -2
      } else if (this.state.currentUserVote === -1) {
        currentUserVote = 0
        netVotes += 1
      }
    } else if (event.target.className.split(" ")[1] === "fa-thumbs-up") {
      if (this.state.currentUserVote === 0) {
        currentUserVote = 1
        netVotes += 1
      } else if (this.state.currentUserVote === -1) {
        currentUserVote = 1
        netVotes += 2
      } else if (this.state.currentUserVote === 1) {
        currentUserVote = 0
        netVotes += -1
      }
    }
    fetch("/api/v1/votes.json", {
      credentials: 'same-origin',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        vote: {
          user_id: this.props.currentUser.id,
          review_id: this.props.review,
          vote: currentUserVote
        }
      })
    })
    this.setState({
      currentUserVote: currentUserVote,
      netVotes: netVotes
    })
  }

  componentDidMount() {
    let currentUserVote = 0
    let netVotes = 0;

    if (this.props.votes) {
      this.props.votes.forEach(vote => {

        if (vote.user_id == this.props.currentUser.id) {
          currentUserVote = vote.vote
        }
        netVotes += vote.vote
      })
      this.setState({
        currentUserVote: currentUserVote,
        netVotes: netVotes
      })
    } else {
      this.setState({
        currentUserVote: currentUserVote,
        netVotes: netVotes
      })
    }
  }

  render() {
    let selectedUp, selectedDown;
    if (this.state.currentUserVote == 1) {
      selectedUp = "selected"
    } else if (this.state.currentUserVote == -1) {
      selectedDown = "selected"
    }
    return(
      <div>
        <i className={`fa fa-thumbs-down fa-2x ${selectedDown}`} aria-hidden="true" onClick={this.handleClick}/>
        <i className={`fa fa-thumbs-up fa-2x ${selectedUp}`} aria-hidden="true" onClick={this.handleClick}/>
        <p>Votes: {this.state.netVotes}</p>
      </div>

    )
  }
}

export default UpvoteDownvote;
