import React from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import './Login.css';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showErrorMessage: false,
            showLoader: false
        }
        this.successCallBack = this.successCallBack.bind(this)
        this.errorCallBack = this.errorCallBack.bind(this)
        this.onFinish = this.onFinish.bind(this)
    }

    successCallBack = () => {
        this.setState({
            showLoader: false
        })
        this.props.history.push('/application')
    }

    errorCallBack = () => {
        this.setState({
            showLoader: false,
            showErrorMessage: true
        })
    }

    onFinish = values => {
        this.setState({
            showLoader: true
        })
        this.props.doLogin(values.username, values.password, this.successCallBack, this.errorCallBack)
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const loginErrorText = 'Something went wrong.Please try again'
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

        return (
            <div className='loginForm'>
                {this.state.showErrorMessage &&
                    <div className='alertMessage'>
                        <Alert message={loginErrorText} type="error" />
                    </div>
                }
                {this.state.showLoader &&
                    <div className='loader'>
                        <Spin indicator={antIcon} />
                    </div>
                }
                {!this.state.showLoader &&
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
        </Button>
                        </Form.Item>
                    </Form>
                }
            </div>
        );
    }
};

export default Login