import React from 'react'

const UserTile = props => {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
      <p>Id: {props.id}</p>
    </div>
  )
}

export default UserTile
