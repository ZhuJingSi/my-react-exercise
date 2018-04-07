import React, { Component } from 'react';
import axios from 'axios';
import Province from './components/province';
import City from './components/city';
import Country from './components/country';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      provinceList: [],
      cityList: [],
      countryList: [],
      province: {
        key: '',
        name: '',
      },
      city: {
        key: '',
        name: '',
      },
      country: {
        key: '',
        name: '',
      }
    };
  }
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
      this.setState({
        provinceList,
        cityList,
        countryList,
      })
    })
  }

  changeProvince(province) {
    this.setState({
      province,
    })
    console.log(`已选择 ${province.name}`)
  }
  changeCity(city) {
    this.setState({
      city,
    })
    console.log(`已选择 ${city.name}`)
  }
  changeCountry(country) {
    this.setState({
      country,
    })
    console.log(`已选择 ${country.name}`)
  }

  render() {
    return (
      <div>
        <Province provinceList={this.state.provinceList} onChange={this.changeProvince.bind(this)} />
        <City cityList={this.state.cityList} currentPro={this.state.province.key} onChange={this.changeCity.bind(this)} />
        <Country countryList={this.state.countryList} currentCity={this.state.city.key} onChange={this.changeCountry.bind(this)} />
      </div>
    );
  }
}