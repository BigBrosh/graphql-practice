import React from 'react';
import { Query } from "react-apollo";

import { getUserById } from "../../query/User";

export const Organizations = ({ userId }) => (
  <Query
    query={getUserById}
    variables={{ userId }}
  >
    {({ loading, error, data }) => {
      return (
        <div
          style={{ marginLeft: 10, marginBottom: 15 }}
          onClick={(e) => { e.stopPropagation(); }}
        >
          <h3>Organizations:</h3>
          {
            loading ?
              <div>Loading...</div> :
              data.user.organizations.map(({ id, name }) => {
                return <div key={id}>Organization {id} - {name}</div>
              })
          }
        </div>
      );
    }}
  </Query>
);