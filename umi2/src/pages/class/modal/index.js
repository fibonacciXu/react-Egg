import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
import Modal from '@/components/Modal';
import { Button } from 'antd-mobile';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({
      show: true,
    });
  };

  handleShow = () => {
    console.log('modal show');
  };

  handleClose = () => {
    console.log('modal close');
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          modal
        </Button>
        {/* <CreatePortal
          show={this.state.show}
          onClose={this.handleClose}
          onShow={this.handleShow}
        >
          modal
        </CreatePortal> */}
        <Modal show={this.state.show} onClose={this.handleClose}>
          modal
        </Modal>
      </div>
    );
  }
}
