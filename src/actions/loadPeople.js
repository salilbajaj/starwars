import * as types from './actionTypes';


export function loadPeopleSuccess(people){
  return {type:types.LOAD_PEOPLE_SUCCESS, people};
}



export function loadPeople(){
  return function(dispatch){
    return fetch("http://swapi.co/api/people/?format=json")
      .then(response => {
        return response.json();
      })
      .then(json => {        
        dispatch(loadPeopleSuccess(json.results));
      })
      .catch(function(error) {
        throw error;
      });
  };
}





      