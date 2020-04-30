import React, { Component } from 'react';
import { Result, Button } from 'antd';

class AddCustomerSuccess extends Component {
  render() {
    return (
      <Result
    status="success"
    title="Account Successfully Created!"
    subTitle="View Manage Customers section to view accounts"
    extra={[
      <Button key="buy" onClick={() => this.props.addAnotherAccount()}>Add Another Account</Button>,
    ]}
  />);
  }
}

export default AddCustomerSuccess;

