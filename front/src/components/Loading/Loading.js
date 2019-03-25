import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import st from './Loading.scss'

const Loading = () => (
  <div className={st.core}>
    <CircularProgress style={{ color: 'white' }} />
  </div>
)

export default Loading