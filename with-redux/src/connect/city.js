import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from '../components/city';

const mapStateToPropsCity = (state, ownProps) => {
  return {
    cityList: state.cityList,
    city: state.city,
    currentPro: state.province.key,
  }
}

const mapDispatchToPropsCity = (dispatch, ownProps) => {
  return bindActionCreators({
    changeCity: payload => ({ type: 'CITY', payload }),
  }, dispatch)
}

export default connect(mapStateToPropsCity, mapDispatchToPropsCity)(City)