import React, { Component } from 'react'
import Login from '../login'
import './MenuItem.css'

export default class MenuItem extends Component {
    render(){
        const menuItemProps = {
            home: <Login {...this.props}/>,
            news: 'Stay Tuned. We will be back with the latest news',
            contact: 'Contact the customer service for more details at XXXXXXX',
            about: 'Our Bank is dedicated towards improving lives'
        }
        return(
            <div className='menuItem'>
                {menuItemProps[this.props.itemSelected]}
            </div>
        )
    }
}