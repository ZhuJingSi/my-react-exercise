import React, { Component } from 'react';

export default class Province extends Component {
  change(event) {
    const selected = this.props.countryList.find(res => res.cyk == event.target.value);

    this.props.changeCountry({
      key: selected.cyk,
      name: selected.cyv,
    })
  }
  
  render() {
    const countryList = this.props.countryList.filter(res => res.ck == this.props.currentCity);

    return (
      <div>
        <select onChange={this.change.bind(this)}>
          <option key='' value=''>请选择县/区</option>
          { countryList.map(res => {
            return <option key={res.cyk} value={res.cyk}>{res.cyv}</option>
          }) }
        </select>
      </div>
    );
  }
}