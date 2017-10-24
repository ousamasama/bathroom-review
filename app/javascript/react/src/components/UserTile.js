import React from 'react'

const UserTile = props => {

  let handleButtonClick = () => props.handleDelete(props.id)

  return (
    <div>
      <h3>{props.username}</h3>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
      <p>Id: {props.id}</p>
      <div className="button" onClick={handleButtonClick}>Delete User</div>
    </div>
  )
}

export default UserTile
