import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './initialState';
import axios from 'axios';
import Province from './connect/province';
import City from './connect/city';
import Country from './connect/country';

export default class App extends Component {
  componentWillMount() {
    axios.get('http://www1.pcauto.com.cn/zt/pcauto20160111/areaData/proCityCountry.js')
    .then(res => {
      const data = res.data.replace(/\s+/g, '');
      const reg = /(varproData_=|varcityData_=|varcountryData_=)/g;
      const replace = data.replace(reg, ' ');
      const provinceList = eval(replace.split(' ')[1]);
      const cityList = eval(replace.split(' ')[2]);
      const countryList = eval(replace.split(' ')[3]);
      console.log(eval(provinceList))
      console.log(eval(cityList))
      console.log(eval(countryList))
      store.dispatch({ type: 'PROVINCEList', payload: provinceList });
      store.dispatch({ type: 'CITYList', payload: cityList });
      store.dispatch({ type: 'COUNTYRList', payload: countryList });
    })
  }

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