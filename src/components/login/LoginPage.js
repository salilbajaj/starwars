import React, { Component,PropTypes } from "react";
import Form from "./Form";
import { connect } from 'react-redux';
import * as loadPeople from '../../actions/loadPeople';
import { bindActionCreators } from 'redux';

import { browserHistory } from "react-router";

 class Login extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      username: "",
      password: "",
      isLoggedIn: false,
      error:{}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.people.map(user => {
      if (
        user.name.toUpperCase() == this.state.username.toUpperCase() &&
        user.birth_year.toUpperCase() == this.state.password.toUpperCase()
      ) {
        let newState = Object.assign({}, this.state);
        newState.isLoggedIn = true;
        this.setState(newState);
        
        browserHistory.push({
          pathname:"/search",
          state:{
            user:user.name
          }
        });
        //type RedirectFunction = (state: ?LocationState, pathname: Pathname | Path, query: ?Query) => void;
      }
      else{    // not handling all the cases for login failure
        let error = {};
        error.title = 'Username and Password do not match';
        this.setState({error: error});
    }
      
    });
  }

 

  render() {
    return <Form error={this.state.error} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
  }
}

  Login.propTypes={
    people:PropTypes.array.isRequired
  }


  function mapStateToProps(state, ownProps){        // state is the state in redux store
    return{
    people: state.people
  };
}
  function mapDispacthToProps(dispatch){
      return{
      actions: bindActionCreators(loadPeople, dispatch)
    };
  }


export default connect(mapStateToProps,mapDispacthToProps)(Login);