import React, { Component } from 'react'
import BathroomTile from '../components/BathroomTile'
import SearchBar from '../components/SearchBar'
import BathroomForm from './BathroomForm'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      bathrooms: []
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleFormChange(event) {
    this.setState({ address: event.target.value })
  }

  handleClick(event) {
    event.preventDefault()
    fetch('/api/v1/bathrooms')
    .then(response => response.json())
    .then(body => {
      this.setState({ bathrooms: body.bathrooms })
    })
  }

  render() {
    let bathrooms;
    if (this.state.bathrooms.length !== 0) {
      bathrooms = this.state.bathrooms.map(bathroom => {
        return(
            <BathroomTile
              key={bathroom.id}
              bathroom={bathroom}
            />
          )
        }
      )
    }

    return(
      <div>
        <SearchBar
          address={this.state.address}
          handlerFunction={this.handleFormChange}
          handleClick={this.handleClick}
        />
        {bathrooms}
        <BathroomForm/>
      </div>
    )
  }
}

export default IndexContainer
