import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSearch(event) {
    this.setState({ address: event.target.value })
  }

  handleClick() {

  }

  render() {
    return(
      <div>
        <a class="button large" onClick={this.handleClick}>Search</a>
        <SearchBar
          address={this.state.address}
          handlerFunction={this.handleSearch}
        />
        <a class="button expanded" href="#">Such Expand</a>
      </div>
    )
  }
}

export default IndexContainer
