import React, { Component } from 'react';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: undefined
    };
  }

  render() {
    return (
      <>
        <h1>{this.props.demo || 'aaaa'}</h1>
        <p>{this.state.text}</p>
      </>
    )
  }
}
