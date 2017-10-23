import React, {Component} from 'react';
import UserTile from '../components/UserTile'

class AdminUserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
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

  render() {

    let users = this.state.users.map(user => {
      return (
        <UserTile
          key={user.id}
          id={user.id}
          username={user.username}
          role={user.role}
          email={user.email}
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
