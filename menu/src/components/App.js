import React from 'react'
import {HashRouter} from 'react-router-dom'
import Menu from './Menu'

export default class App extends React.Component {
    render () {
        return (
            <HashRouter>
                <Menu/>
            </HashRouter>
        )
    }
}