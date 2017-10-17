import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFormChange(event) {
    this.setState({ address: event.target.value })
  }

  handleClick() {
    // fetch based on adress.state
  }

  render() {
    return(
      <div>
        <SearchBar
          address={this.state.address}
          handlerFunction={this.handleFormChange}
          handleClick={this.handleClick}
        />
      <a className="button expanded" href="#">Such Expand</a>
      </div>
    )
  }
}

export default IndexContainer
