

// Load main styles
import '../styles/main.scss'

import React, { Component } from 'react'
import Header from './layout/header/header'
import Footer from './layout/footer/footer'

const isLogged = false

export default (props) => (
  <main>
    <Header isLogged={isLogged} />

    {props.children}

    <Footer />
  </main>
)
