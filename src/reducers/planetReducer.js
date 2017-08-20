import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function planetReducer(state = initialState.planets, action){
  switch (action.type){
    case types.LOAD_PLANETS_SUCCESS:
      return action.planets;
      
    default:
      return state;
  }
}
