import React, { Component,PropTypes } from "react";
import TextInput from '../common/TextInput';


export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
        <h1>Star Wars Login</h1>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" className="text">
              Username
            </label>
            <TextInput
              name="username"              
              type="text"
              placeholder="Username"              
              onChange={this.props.handleChange}
              error={this.props.error.title}
             />
           
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2" className="text">
              Password
            </label>
           <TextInput
              name="password"              
              type="password"
              placeholder="Password"
              onChange={this.props.handleChange}
              error={this.props.error.title}
              />
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

Form.propTypes={
  handleSubmit:PropTypes.func,
  handleChange:PropTypes.func,
  error:PropTypes.object
}
