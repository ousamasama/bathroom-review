import React from 'react'

const BathroomShowFormButton = props => {
  return(
    <a className="button highlight" onClick={props.handleShowForm} id='show-bathroom-form'>
      Add New Bathroom
    </a>
  )
}

export default BathroomShowFormButton
