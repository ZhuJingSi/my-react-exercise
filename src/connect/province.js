import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Province from '../components/province';

const mapStateToPropsProvince = (state, ownProps) => {
  return {
    provinceList: state.provinceList,
    province: state.province,
  }
}

const mapDispatchToPropsProvince = (dispatch, ownProps) => {
  return bindActionCreators({
    changeProvince: payload => ({ type: 'PROVINCE', payload }),
    changeCity: payload => ({ type: 'CITY', payload }),
    changeCountry: payload => ({ type: 'COUNTRY', payload }),
  }, dispatch)
}

export default connect(mapStateToPropsProvince, mapDispatchToPropsProvince)(Province)