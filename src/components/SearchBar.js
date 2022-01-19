import React from "react";
import Validator from "./Validator";

class SearchBar extends React.Component {
  state = { term: " Search or enter movie title" };

  render() {
    return (
      <div className="ui segment">
        <span className="ui form">
          <span className="field">
            <label>Search Bar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <Validator />
          </span>
        </span>
      </div>
    );
  }
}

export default SearchBar;
