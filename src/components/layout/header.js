
import React from 'react'
import './header.css'

import HeaderLogged from '../parts/header/header-logged'
import HeaderNotLogged from '../parts/header/header-not-logged'

export default (props) => (
  <div>
    {props.isLogged ? (
      <HeaderLogged />
    ) : (
      <HeaderNotLogged />
    )}
  </div>
)
