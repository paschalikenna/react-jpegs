import React from "react";
import Validator from "./Validator";

class SearchBar extends React.Component {
  state = { term: " " };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <span className="field">
            <label>Search Bar</label>
            <input
              type="text"
              placeholder="Enter Password"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <Validator />
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
