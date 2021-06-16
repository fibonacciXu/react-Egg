import React, { Component, createRef } from 'react';
import Child from './child';
import InputForward from './forward';

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.domRef);
    console.log(this.domRef.current.innerHTML);
    console.log(this.childRef.current);

    this.inputRef.current.focus();
  }

  handleClick = str => {
    this.childRef.current.changeText(str);
  };

  render() {
    return (
      <div>
        <div ref={this.domRef}>refs text</div>

        <Child ref={this.childRef} />
        <button onClick={() => this.handleClick('new text1')}>修改child的值</button>

        <InputForward ref={this.inputRef} />
      </div>
    );
  }
}
