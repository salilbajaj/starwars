import React, { Component,PropTypes } from "react";
import Planet from "./Planet";
import Search from "./Search";
import { connect } from 'react-redux';
import * as loadPlanets from '../../actions/loadPlanets';
import { bindActionCreators } from 'redux';

let countSearch=0;
const exceedMsg="Number Of Searches within 1 minute exceeds 15. Please wait for minute to complete.";
const specialUser="Luke Skywalker";

class SearchPage extends Component {

  constructor() {
    super();
    this.state = {
      planets: [],
      search: "",
      exceedMsg:exceedMsg
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount(){    
    this.calCulateSize()                             
  }
  startTimer(){                                 // starts timer when user starts searching. Allows only 15 search
    setTimeout(()=>{
      
      if(countSearch>15){
        alert('1minute complete. You can search again! ')
        
      }
      countSearch=0                               //resets counter to 0 after a min if user is not luke

    },60000)
  }
  calCulateSize(){                              //calculates the size of planet acc to population
    let planets=this.props.planets;
    let counter=10;
    for(let i=0;i<planets.length;i++){
      if(planets[i].population=='unknown')
          planets[i].population=1

    }
    planets.sort(function(a,b){
      return a.population-b.population
    })
    for(let j=0;j<planets.length;j++){
      if(planets[j].population!=1) 
          counter+=10

      planets[j].width=100+counter;
      planets[j].height=100+counter;
      planets[j].fontSize=10+counter/10;
      
    }
  }
  

  handleSearch(e) {    
    if(countSearch==0 && this.props.location.state.user!=specialUser)
      this.startTimer();      
    
    countSearch++;
    
    let newState = Object.assign({}, this.state);
    newState.search = e.target.value;
    this.setState(newState);
  }

  render() {
    let user=this.props.location.state.user;
    return (
      <div>
        <Search handleSearch={this.handleSearch} />

        {countSearch<16 || user==specialUser ? this.props.planets
          .filter(planet => planet.name.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0)
          .map(planet =>  <Planet {...planet} key={planet.name} />) :<div style={{color:'red'}}>{this.state.exceedMsg}</div>}
      </div>
    );
  }
}
  SearchPage.propTypes={
  location:PropTypes.object.isRequired,
  planets:PropTypes.array.isRequired
  
}

  function mapStateToProps(state, ownProps){       
    return{
    planets: state.planets
  };
}
  function mapDispacthToProps(dispatch){
      return{
      actions: bindActionCreators(loadPlanets, dispatch)
    };
  }

export default connect(mapStateToProps,mapDispacthToProps)(SearchPage);

