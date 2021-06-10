import React, { Component, PureComponent } from 'react';

export default class ComponentOld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // text: 'demo1111',
      text: {
        id: 1,
      }
    };
    console.log('constructor');
  }

  handleClick = () => {
    this.setState({
      // text: 'demo2',
      text: { id: 2},
    });
  };

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   console.log(nextProps, nextState);
  //   if (nextState.text === 'demo2' && this.state.text !== nextState.text) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log('render');
    return <div onClick={this.handleClick}>component-old--{this.state.text.id}</div>;
  }
}
