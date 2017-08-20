import {combineReducers} from 'redux';
import people from './loginReducer';
import planets from './planetReducer';

const rootReducer = combineReducers({
  people,
  planets
});

export default rootReducer
