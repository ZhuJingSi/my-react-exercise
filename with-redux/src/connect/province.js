import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Province from '../components/province';
import getData from '../request';

const mapStateToPropsProvince = (state, ownProps) => {
  return {
    provinceList: state.provinceList,
    province: state.province,
  }
}

const mapDispatchToPropsProvince = (dispatch, ownProps) => {
  return bindActionCreators({
    changeProvince: payload => ({ type: 'PROVINCE', payload }),
  }, dispatch)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if (!stateProps.provinceList || !stateProps.provinceList.length) {
    getData();
  }
  return Object.assign(stateProps, dispatchProps, ownProps)
}

export default connect(mapStateToPropsProvince, mapDispatchToPropsProvince, mergeProps)(Province)