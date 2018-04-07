import { createStore } from 'redux';
import reducer from './reducers'

const initialState = {
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
}

export default createStore(reducer, initialState);
