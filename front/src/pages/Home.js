import React from 'react'
import Main from './Main'
import Header from '../components/Header/Header'
import HomeWrapper from '../components/HomeWrapper/HomeWrapper'
import Footer from '../components/Footer/Footer'

const meta = {
  title: 'Tiki',
  description: 'Tiki'
}

const Home = (props) => (
  <Main location={props.location} meta={meta}>
    <Header {...this.props} />
    <HomeWrapper />
    <Footer />
  </Main>
)

export default Home