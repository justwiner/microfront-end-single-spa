import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './pages/App'

export default class Root extends React.Component {

  render () {
    return (
      <App />
    )
  }
}
