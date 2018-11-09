import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {listUsers} from "../../query/User";

class Users extends Component {
  render() {
    const { loading, users } = this.props.listUsers;

    return (
      <div>
        <h2>Users</h2>
        {
          loading ?
            <div>Loading...</div> :
            <ul>
              {
                users.map(({ id, name }) => {
                  return <li key={id}>User {id} - {name}</li>;
                })
              }
            </ul>
        }
      </div>
    );
  }
}

export default compose(
  graphql(listUsers, { name: "listUsers" })
)(Users);