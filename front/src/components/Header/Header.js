import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import st from './Header.scss'
import apiProvider from '../../api/main'

@inject('configStore') @observer
class Header extends Component {

  componentDidMount() {
      const promise = apiProvider.getOrPost('get', 'login');
      console.log(promise.value)

  }

  render() {
    const { toggleShowMenu } = this.props.configStore

    return (
      <div className={st.core}>
      </div>
    )
  }
}

export default Header
