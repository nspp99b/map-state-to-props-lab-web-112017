import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    
    const usersArray = this.props.users.map((u, i) => (<li key={i}>{u.userName} - {u.hometown}</li>))

    return (
      <div>
        <ul>
          {usersArray}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?

