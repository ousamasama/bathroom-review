import React, {Component} from 'react';
import UserTile from '../components/UserTile'

class AdminUserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/admin/users`, {
      credentials: 'same-origin',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }})
    .then(response => response.json() )
    .then(body => {
      console.log(body);
      this.setState({
        users: body.users })
    })
  }

  handleDelete(id) {
    fetch(`/api/v1/admin/users/${id}`, {
      credentials: 'same-origin',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: 'delete',
      body: JSON.stringify({
        user: {
          id: id
        }
      })
    })

    let remainingUsers = this.state.users.filter(user => {
      return user.id !== id
    })
    this.setState({ users: remainingUsers })
  }


  render() {

    let users = this.state.users.map(user => {
      return (
        <UserTile
          key={user.id}
          id={user.id}
          username={user.username}
          role={user.role}
          email={user.email}
          handleDelete={this.handleDelete}
        />
      )
    })

    return (
      <div>
        {users}
      </div>

    )
  }
}

export default AdminUserIndex;
