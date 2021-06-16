import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem1 extends Component {
  static defaultProps = {
    name: 'list-item1-value1',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.handleItem('list-item1-value2');
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>item1--{this.props.name}</h1>
      </div>
    );
  }
}
