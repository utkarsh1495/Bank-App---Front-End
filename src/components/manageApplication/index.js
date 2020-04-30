import React, { Component } from 'react';
import SlideMenu from '../slideMenu'
import './ManageApplication.css'
import WelcomePage from '../employeeContents/WelcomePage'
import AddCustomer from '../employeeContents/AddCustomer'
import ManageCustomers from '../employeeContents/ManageCustomers'
import PostNews from '../employeeContents/PostNews'
import Logout from '../employeeContents/Logout'

class ManageApplication extends Component {
  constructor(props){
    super(props)
     this.state = {
       selectedItem:'home'
     }
  }
  handleSelectedItem = key => {
    this.setState({
      selectedItem: key
    })
  }

  render() {
    const manageAccountProps = {
      fetchAccounts: this.props.fetchAccounts,
      ...this.props
    }
    const displaySlideMenuContent = {
      'home': <WelcomePage userName={this.props.userName} />,
      'addCustomer': <AddCustomer handleSubmit={this.props.createAccount}/>,
      'manageCustomer': <ManageCustomers {...manageAccountProps}/>,
      'postNews': <PostNews />,
      'logout': <Logout />
    }
    return (
      <div className='manageApp'>
        <div className='slideMenu'>
          <SlideMenu getSelectedItem={this.handleSelectedItem} />
        </div>
          {displaySlideMenuContent[this.state.selectedItem]}
      </div>
    );
  }
}

export default ManageApplication;

