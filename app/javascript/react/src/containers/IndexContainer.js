import React, { Component } from 'react'
import BathroomTile from '../components/BathroomTile'
import SearchBar from '../components/SearchBar'
import BathroomForm from './BathroomForm'

class IndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      bathrooms: [],
      user: {}
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
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

  handleFormChange(event) {
    this.setState({ address: event.target.value })
  }

  handleClick(event) {
    event.preventDefault()
    fetch(`/api/v1/bathrooms/?query=${this.state.address}`)
    .then(response => response.json())
    .then(body => {
      this.setState({ bathrooms: body.bathrooms })
    })
  }

  handleShowForm(event) {
    event.preventDefault();
    let form = document.getElementById("new-bathroom-form")

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
      <div className="index-container">
        <SearchBar
          address={this.state.address}
          handlerFunction={this.handleFormChange}
          handleClick={this.handleClick}
        />
        <div className="bathroom-tiles">
          {bathrooms}
        </div>
        <div id="new-bathroom-form" className="hidden">
          <BathroomForm/>
        </div>
      </div>
    )
  }
}

export default IndexContainer
