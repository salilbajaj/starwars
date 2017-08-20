import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form-group">
        <input type="text" onChange={this.props.handleSearch} className="form-control" placeholder="Search..." />
      </div>
    );
  }
}
