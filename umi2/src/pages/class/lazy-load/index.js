import React, { Component, lazy, Suspense } from 'react';
// import Demo from './demo';
const Demo = lazy(() => import('./demo'));

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true,
      });
    }, 1000);
  }

  render() {
    return (
      <div style={{ height: '200px' }}>
        {this.state.flag ? (
          <Suspense fallback={<div style={{ fontSize: '50px', color: '#f60' }}>loading...</div>}>
            <Demo demo={this.state.demo} />
          </Suspense>
        ) : null}
      </div>
    );
  }
}
