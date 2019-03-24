import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.scss';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}

registerServiceWorker();
