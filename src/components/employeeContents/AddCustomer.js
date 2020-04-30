import React, { PureComponent } from 'react';
import { Form, Input, InputNumber, Button, Alert, Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';
import AddCustomerSuccess from './AddCustomerSuccess';
import AccountForm from './AccountForm'

class AddCustomer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false,
      showLoader: false,
      showSuccessPage: false
    }
  }

  successCallback = () => {
    this.setState({
      showLoader: false,
      showSuccessPage: true
    })
  }

  errorCallBack = () => {
    this.setState({
      showLoader: false,
      showErrorMessage:true
    })
  }

  onFinish = values => {
    this.setState({
      showLoader: true
    })
    this.props.handleSubmit(values, this.successCallback, this.errorCallback)
  };

  addAccount = () => {
    this.setState({
      showSuccessPage: false
    })
  }

render(){
  const accountFormProps = {
    onFinish: this.onFinish
  }

  const addCustomerErrorText = 'Something went wrong.Please try again'
  const antIcon = <LoadingOutlined style={{ fontSize: 35 }} spin />;
  return (
    <div className='slideContent'>
      {this.state.showErrorMessage &&
                    <div className='alertMessage'>
                        <Alert message={addCustomerErrorText} type="error" />
                    </div>
                }
                {this.state.showLoader &&
                    <div className='loaderAddCustomer'>
                        <Spin indicator={antIcon} />
                    </div>
                }
    {!this.state.showLoader && !this.state.showSuccessPage && <AccountForm {...accountFormProps}/>}
    {this.state.showSuccessPage && <AddCustomerSuccess addAnotherAccount={this.addAccount}/>}
    </div>
  )
};
};

export default AddCustomer;

