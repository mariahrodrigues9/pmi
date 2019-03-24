import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Helmet } from 'react-helmet'

@inject('configStore') @observer
class Main extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const { title, description } = this.props.meta

    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {this.props.children}
      </Fragment>
    )
  }
}

Main.propTypes = {
  meta: PropTypes.object
}

Main.defaultProps = {
  meta: {
    title: 'Tiki',
    description: 'Tiki'
  }
}

export default Main