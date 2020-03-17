import React from 'react'
import {Menu, Icon} from 'antd'
import { Link } from 'react-router-dom'
const MenuItem = Menu.Item

export default class Menu_ extends React.Component {
    render () {
        return (
            <div style={menuStyle}>
                <h1>menu!</h1>
                <Menu>
                    <MenuItem key="1">
                        <Icon type="pie-chart"/>
                        <Link to='/project1' style={{display: 'inline'}}>Project1(REACT)-主页</Link>
                    </MenuItem>
                    <MenuItem key="2">
                        <Icon type="desktop"/>
                        <Link to='/project1/page1' style={{display: 'inline'}}>Project1(REACT)-页面1</Link>
                    </MenuItem>
                    <MenuItem key="32">
                        <Icon type="desktop"/>
                        <Link to='/project1/page2' style={{display: 'inline'}}>Project1(REACT)-页面2</Link>
                    </MenuItem>
                    <MenuItem key="4">
                        <Icon type="desktop"/>
                        <Link to='/project2' style={{display: 'inline'}}>Project2(VUE)-主页</Link>
                    </MenuItem>
                    <MenuItem key="5">
                        <Icon type="desktop"/>
                        <Link to='/project2/modulesA' style={{display: 'inline'}}>Project2(VUE)-模块A</Link>
                    </MenuItem>
                    <MenuItem key="6">
                        <Icon type="desktop"/>
                        <Link to='/project2/modulesA/about' style={{display: 'inline'}}>Project2(VUE)-模块A-关于</Link>
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