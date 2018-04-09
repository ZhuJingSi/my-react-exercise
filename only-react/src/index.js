import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Province from './components/province';
import City from './components/city';
import App from './app';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="province" component={Province} />
      <Route path="city" component={City} />
    </Route>
</Router>), document.getElementById('root'));
registerServiceWorker();
