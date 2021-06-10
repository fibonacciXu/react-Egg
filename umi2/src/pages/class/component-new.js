import React, { Component } from 'react';

export default class ComponentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: 'demo1111',
      text: {
        id: 1,
      },
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props, state);
    return {
      state,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 'getSnapshotBeforeUpdate';
  }

  componentDidUpdate(props, state, snapshot) {
    console.log(snapshot);
  }

  handleClick = () => {
    this.setState({
      // text: 'demo2',
      text: { id: 2 },
    });
  };

  render() {
    console.log('render');
    return <div onClick={this.handleClick}>component-new--{this.state.text.id}</div>;
  }
}
