import React, { Component } from 'react';
import {withApollo} from 'react-apollo';

import {Organizations as orgs} from "./organizations";

const Organizations = withApollo(orgs);

export class User extends Component {
  state = {
    isChecked: false
  };

  toogleChecked = () => {
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked
    });
  };

  render() {
    const {
      isChecked
    } = this.state;

    const {
      id,
      name
    } = this.props;

    return (
      <li
        onClick={this.toogleChecked}
        style={{ marginBottom: 6 }}
      >
        User {id} - {name}
        {
          isChecked &&
            <Organizations userId={id}/>
        }
      </li>
    );
  }
}