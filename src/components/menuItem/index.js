import React, { Component } from 'react'
import './MenuItem.css'

export default class MenuItem extends Component {
    render(){
        const menuItemProps = {
            Home: 'Login for more details',
            News: 'Stay Tuned. We will be back with the latest news',
            Contact: 'Contact the customer service for more details at XXXXXXX',
            About: 'Our Bank is dedicated towards improving lives'
        }
        return(
            <div className='menuItem'>
                {menuItemProps[this.props.itemSelected]}
            </div>
        )
    }
}