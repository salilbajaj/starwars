import * as types from '../actions/actionTypes';
import initialState from './initialState';
// export default function genreReducer(state = [], action){
//   switch (action.type){
//     case types.CREATE_GENRE:
//       return [...state,
//       Object.assign({}, action.genre)
//     ];
//     default:
//       return state;
//   }
// }

export default function loginReducer(state = initialState.people, action){
  switch (action.type){
    case types.LOAD_PEOPLE_SUCCESS:
      return action.people;
    default:
      return state;
  }
}
