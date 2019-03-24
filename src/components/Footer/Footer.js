import React from 'react'
import tikiLogo from '../../assets/img/brands/tiki.svg'
import st from './Footer.scss'

const Footer = (props) => (
  <div className={st.core}>
    <div className='container'>
      <div className={st.bottomBox}>
        <div className={st.tikiBlock}>
          <a href='https://www.tiki.com.br/' rel='noopener noreferrer' target='_blank'>
            <img src={tikiLogo} alt='Tiki' title='Tiki' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
