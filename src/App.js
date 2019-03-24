import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'mobx-react'
import Loading from './components/Loading/Loading'
import xtheme from './stylesheets/theme'
import ConfigStore from './store/ConfigStore'

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./pages/Contact'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: Loading,
});

const configStore = new ConfigStore();
const stores = { configStore }

const App = () => {
  return (
    <Provider {...stores}>
      <MuiThemeProvider theme={xtheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contato" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
