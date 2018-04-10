import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type){
    case 'GETDATA':
      const data = action.payload.replace(/\s+/g, '');
      const reg = /(varproData_=|varcityData_=|varcountryData_=)/g;
      const replace = data.replace(reg, ' ');
      const provinceList = eval(replace.split(' ')[1]);
      const cityList = eval(replace.split(' ')[2]);
      const countryList = eval(replace.split(' ')[3]);
      return {...state, provinceList, cityList, countryList };
    case 'PROVINCEList': return { ...state, provinceList: action.payload };
    case 'CITYList': return { ...state, cityList: action.payload };
    case 'COUNTYRList': return { ...state, countryList: action.payload };
    case 'PROVINCE': return { ...state, province: action.payload, city: { key: '', name: '' }, country: { key: '', name: '' } };
    case 'CITY': return { ...state, city: action.payload, country: { key: '', name: '' } };
    case 'COUNTYR': return { ...state, country: action.payload };
    default: return state;
  }
}