import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {listUsers} from "../../query/User";
import {User} from "../User";

class Users extends Component {
  render() {
    const { loading, users } = this.props.listUsers;

    return (
      <div>
        <h2>Users</h2>
        {
          loading ?
            <div>Loading...</div> :
            <div>
              {
                users.map(({ id, name }) => {
                  return <User key={id} id={id} name={name} />;
                })
              }
            </div>
        }
      </div>
    );
  }
}

export default compose(
  graphql(listUsers, { name: "listUsers" })
)(Users);