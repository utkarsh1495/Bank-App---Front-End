import React, { PureComponent } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';


const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!'
  };

  const defaultProps = {
      name: '',
      acno: '',
      deposit: '',
      buttonTitle: 'Create Account',
      isDepositRequired: true,
      isNameRequired: true,
      isAccountNumberRequired: true
  }

export default class AccountForm extends PureComponent {
    render(){
    return (
      <Form {...layout} name="nest-messages" onFinish={(values) => this.props.onFinish(values)} validateMessages={validateMessages}>
        <Form.Item
          name={['name']}
          label="Name"
          rules={[
            {
              required: this.props.isNameRequired,
            },
          ]}
        >
          <Input defaultValue={this.props.name}/>
        </Form.Item>
        <Form.Item
          name={['acno']}
          label="Account Number"
          rules={[
            {
              required: this.props.isAccountNumberRequired,
            },
          ]}
        >
          <Input defaultValue={this.props.acno}/>
        </Form.Item>
        <Form.Item
          name={['deposit']}
          label="Deposit Amount"
          required={this.props.isDepositRequired}
          rules={[
            {
              validator: (_, value) => {
                if (value == null && this.props.isDepositRequired)
                  return Promise.reject('Deposit Amount is required!')
                else if (typeof value !== 'number' && value !== null)
                  return Promise.reject('Deposit Amount is not a valid number!')
                else if (value <= 0)
                  return Promise.reject('Deposit Amount must be greater than zero!')
                else
                  return Promise.resolve()
              }
            },
          ]}
        >
          <InputNumber defaultValue={this.props.deposit}/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            {this.props.buttonTitle}
        </Button>
        </Form.Item>
      </Form>
    )
  }
}

AccountForm.defaultProps = defaultProps