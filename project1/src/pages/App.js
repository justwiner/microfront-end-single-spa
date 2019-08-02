import HomePage from './homePage'
import Page1 from './page1'
import Page2 from './page2'
import React from 'react'
import {Router} from '@reach/router'

export default class App extends React.Component {
    render () {
        return (
            <Router>
                <HomePage  path="/"/>
                <Page1 path="/page1"/>
                <Page2 path="/page2"/>
            </Router>
        )
    }
}
