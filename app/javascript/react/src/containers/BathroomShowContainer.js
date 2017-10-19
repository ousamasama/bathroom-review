import React, { Component } from 'react'
import BathroomTile from '../components/BathroomTile'
import SearchBar from '../components/SearchBar'
import BathroomInfo from '../components/BathroomInfo'

class BathroomShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      bathroomInfo: {}
    }
  }
  componentDidMount(){
      let bathroomId = this.props.params.id
      fetch(`/api/v1/bathrooms/${bathroomId}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ bathroomInfo: body.bathrooms })
      })
    }

  render(){
    return(
      <BathroomInfo
        bathroomInfo={this.state.bathroomInfo}
      />
    )
  }

}

export default BathroomShowContainer;
