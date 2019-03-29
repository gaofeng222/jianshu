import { combineReducers } from 'redux';

import { reducer as Headreducer } from '../component/header/store/'

const reducer =  combineReducers({
    header : Headreducer,
})


export default reducer;
