
import React from 'react'
import '../header/header.css'

import HeaderLogged from '../../parts/header/header-logged'
import HeaderNotLogged from '../../parts/header/header-not-logged'

export default (props) => (
  <header>
  Hey Yo
    {props.isLogged ? (
      <HeaderLogged />
    ) : (
      <HeaderNotLogged />
    )}
  </header>
)
