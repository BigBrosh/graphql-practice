import React, { Component } from 'react';
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, graphql</h1>
        <Users />
      </div>
    );
  }
}

export default App;
