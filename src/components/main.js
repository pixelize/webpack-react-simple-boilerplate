

// Load main styles
import '../styles/base/typography.css'
import '../styles/main.css'

import React, { Component } from 'react'
import Header from './layout/header/header'
import Footer from './layout/footer/footer'

const isLogged = true

export default (props) => (
  <main>
    <Header isLogged={isLogged} />

    {props.children}

    <Footer />
  </main>
)
