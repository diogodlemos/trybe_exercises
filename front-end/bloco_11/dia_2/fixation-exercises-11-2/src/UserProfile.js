// arquivo UserProfile.js
import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <div key= {this.props.user.id}>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
      </div>
    );
  }
}

export default UserProfile;