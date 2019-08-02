import React from 'react'
import {Menu, Icon} from 'antd'
import { Link } from '@reach/router'
const MenuItem = Menu.Item

export default class Menu_ extends React.Component {
    render () {
        return (
            <div style={menuStyle}>
                <h1>menu!</h1>
                <Menu>
                    <MenuItem key="1">
                        <Icon type="pie-chart"/>
                        <Link to='/' style={{display: 'inline'}}>主页</Link>
                    </MenuItem>
                    <MenuItem key="2">
                        <Icon type="desktop"/>
                        <Link to='/page1' style={{display: 'inline'}}>页面1</Link>
                    </MenuItem>
                    <MenuItem key="32">
                        <Icon type="desktop"/>
                        <Link to='/page2' style={{display: 'inline'}}>页面2</Link>
                    </MenuItem>
                    <MenuItem key="4">
                        <Icon type="desktop"/>
                        <Link to='/page3' style={{display: 'inline'}}>页面3</Link>
                    </MenuItem>
                    <MenuItem key="5">
                        <Icon type="desktop"/>
                        <Link to='/page4' style={{display: 'inline'}}>页面4</Link>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
}

const menuStyle = {
    display: 'inline-block',
    position: 'fixed',
    width: '300px',
    height: '100%'
}