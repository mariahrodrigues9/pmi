import React from 'react'
import Main from './Main'
import Header from '../components/Header/Header'
import NotFoundWrapper from '../components/NotFoundWrapper/NotFoundWrapper'
import Footer from '../components/Footer/Footer'

const meta = {
  title: 'Tiki',
  description: 'Tiki'
}

const NotFound = (props) => (
  <Main location={props.location} meta={meta}>
    <Header {...props} />
    <NotFoundWrapper {...props} />
    <Footer />
  </Main>
)

export default NotFound