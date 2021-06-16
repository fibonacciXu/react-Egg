import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'old text',
    };
  }

  changeText(text) {
    console.log('change text');
    this.setState({
      text,
    });
  }

  render() {
    return <div>子组件-{this.state.text}</div>;
  }
}
