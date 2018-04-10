import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './initialState';
import Province from './connect/province';
import City from './connect/city';
import Country from './connect/country';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Province />
          <City />
          <Country />
        </div>
      </Provider>
    );
  }
}