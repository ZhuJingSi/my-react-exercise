import React, { Component } from 'react';

export default class Province extends Component {
  change(event) {
    const selected = this.props.provinceList.find(res => res.pk == event.target.value);
    this.props.onChange({
      key: selected.pk,
      name: selected.pv,
    })
  }
  render() {
    return (
      <div>
        <select onChange={this.change.bind(this)}>
          <option key='' value=''>请选择省</option>
          { this.props.provinceList.map(res => {
            return <option key={res.pk} value={res.pk}>{res.pv}</option>
          }) }
        </select>
      </div>
    );
  }
}