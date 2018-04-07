import React, { Component } from 'react';

export default class Province extends Component {
  constructor() {
    super();
  }
  change(event) {
    const selected = this.props.cityList.find(res => res.ck == event.target.value);
    this.props.onChange({
      key: selected.ck,
      name: selected.cv,
    })
  }
  render() {
    const cityList = this.props.cityList.filter(res => res.pk == this.props.currentPro);
    return (
      <div>
        <select onChange={this.change.bind(this)}>
          <option key='' value=''>请选择市</option>
          { cityList.map(res => {
            return <option key={res.ck} value={res.ck}>{res.cv}</option>
          }) }
        </select>
      </div>
    );
  }
}