import * as types from './actionTypes';


export function loadPlanetsSuccess(planets){
  return {type:types.LOAD_PLANETS_SUCCESS, planets};
}



export function loadPlanets(){
  return function(dispatch){
    return fetch("http://swapi.co/api/planets/?format=json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(loadPlanetsSuccess(json.results));
      })
      .catch(function(error) {
        throw error;
      });
  };
}





      