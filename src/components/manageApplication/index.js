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
    const displaySlideMenuContent = {
      'home': <WelcomePage userName={this.props.userName} />,
      'addCustomer': <AddCustomer />,
      'manageCustomer': <ManageCustomers />,
      'postNews': <PostNews />,
      'logout': <Logout />
    }
    return (
      <div className='manageApp'>
        <SlideMenu getSelectedItem={this.handleSelectedItem} />
        <div className='slideContent'>
          {displaySlideMenuContent[this.state.selectedItem]}
        </div>
      </div>
    );
  }
}

export default ManageApplication;

