import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import st from './NotFoundWrapper.scss'

const NotFoundWrapper = (props) => (
  <div className={st.core}>
    <div className='container'>
      <div className={st.wrapper}>
        <div className={st.heading}>
          <Typography variant='title' component='h3'>
            Ops!
          </Typography>
          <Typography variant='headline' component='h1'>
            Página não encontrada
          </Typography>
          <Typography component='p'>
            Clique no botão abaixo e retorne a página inicial. 
          </Typography>
          <Button variant='raised' color='primary' onClick={() => props.history.push('/')}>
            Home
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundWrapper