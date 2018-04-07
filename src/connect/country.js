import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Country from '../components/country';

const mapStateToPropsCountry = (state, ownProps) => {
  return {
    countryList: state.countryList,
    country: state.country,
    currentCity: state.city.key,
  }
}

const mapDispatchToPropsCountry = (dispatch, ownProps) => {
  return bindActionCreators({
    changeCountry: payload => ({ type: 'COUNTRY', payload }),
  }, dispatch)
}

export default connect(mapStateToPropsCountry, mapDispatchToPropsCountry)(Country)