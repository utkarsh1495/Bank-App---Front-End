import React, { PureComponent } from 'react';
import './Menu.css';
import MenuItem from '../menuItem'

export default class Menu extends PureComponent {
    constructor() {
        super()
        this.state = {
            itemSelected: 'Home'
        }
    }
    handleOnClick = (itemName) => {
        this.setState({
            itemSelected: itemName
        })
    }
    render() {
        const menuItems = ['Home', 'News', 'Contact', 'About']
        const modifiedMenuItemClassNames = menuItems.map(item => {
            let trimmedItem = item.trim()
            if (trimmedItem === this.state.itemSelected)
                return `${trimmedItem} selected`
            return trimmedItem
        })
        return (
            <React.Fragment>
                <div className="menu">
                    {
                        modifiedMenuItemClassNames.map(item => {
                            return <span className={item}
                                onClick={() => { this.handleOnClick(item.split(' ')[0]) }}>
                                {item.toUpperCase().split(' ')[0]}
                            </span>
                        })
                    }
                </div>
                <MenuItem itemSelected={this.state.itemSelected} />
            </React.Fragment>
        )
    }
}