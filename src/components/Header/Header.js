import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import st from './Header.scss'

@inject('configStore') @observer
class Header extends Component {
  render() {
    const { toggleShowMenu } = this.props.configStore

    return (
      <div className={st.core}>
      </div>
    )
  }
}

export default Header
