import axios from 'axios';
import store from './initialState';

export default () => {
  axios.get('http://www1.pcauto.com.cn/zt/pcauto20160111/areaData/proCityCountry.js')
    .then(res => {
      store.dispatch({ type: 'GETDATA', payload: res.data });
    });
}