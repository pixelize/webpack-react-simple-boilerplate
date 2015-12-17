

// Load main styles
import '../styles/components/typography.css'
import './main.css'

import React, { Component } from 'react'
import Header from './layout/header'
import Navigation from './layout/navigation'

export default class Main extends Component {
  render () {
    return (
      <main>
        <Header />
        <Navigation />
        {this.props.children}
      </main>
    )
  }
}
