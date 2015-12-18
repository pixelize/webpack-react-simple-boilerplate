

// Load main styles
import '../styles/components/typography.css'
import './main.css'

import React, { Component } from 'react'
import Header from './layout/header'
import Navigation from './layout/navigation'
import Footer from './layout/footer'

const isLogged = true

export default (props) => (
  <main>
    <Header isLogged={isLogged} />

    {props.children}

    <Footer />
  </main>
)
