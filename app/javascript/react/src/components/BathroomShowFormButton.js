import React from 'react'

const BathroomShowFormButton = props => {
  return(
    <a className="button large" onClick={props.handleShowForm} id='show-bathroom-form'>
      Add New Bathroom
    </a>
  )
}

export default BathroomShowFormButton
