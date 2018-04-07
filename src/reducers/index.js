import initialState from '../initialState';

export default (state = initialState, action) => {
  switch (action.type){
    case 'PROVINCEList': return { ...state, provinceList: action.payload };
    case 'CITYList': return { ...state, cityList: action.payload };
    case 'COUNTYRList': return { ...state, countryList: action.payload };
    case 'PROVINCE': return { ...state, province: action.payload };
    case 'CITY': return { ...state, city: action.payload };
    case 'COUNTYR': return { ...state, country: action.payload };
    default: return state;
  }
}