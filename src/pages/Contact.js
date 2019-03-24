import React from 'react'
import Main from './Main'
import Header from '../components/Header/Header'
import ContactWrapper from '../components/ContactWrapper/ContactWrapper'

const meta = {
  title: 'Tiki',
  description: 'Tiki'
}

const Contact = (props) => (
  <Main location={props.location} meta={meta}>
    <Header {...props} />
    <ContactWrapper />
  </Main>
)

export default Contact