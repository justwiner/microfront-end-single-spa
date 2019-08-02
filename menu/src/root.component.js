import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Menu from './components/Menu'

export default class Root extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  render () {
    return (
      <Menu />
    )
  }
}
