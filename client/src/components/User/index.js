import React, { Component } from 'react';

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
      <div onClick={this.toogleChecked}>
        User {id} - {name}
        {
          isChecked && <p>Checked</p>
        }
      </div>
    );
  }
}