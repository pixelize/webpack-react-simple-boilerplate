
import React from 'react'
import '../header/header.scss'

import HeaderLogged from '../../parts/header/header-logged'
import HeaderNotLogged from '../../parts/header/header-not-logged'

export default (props) => (
  <header>
    {props.isLogged ? (
      <HeaderLogged />
    ) : (
      <HeaderNotLogged />
    )}
  </header>
)
