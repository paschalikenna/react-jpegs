import React from "react";
// import axios, { Axios } from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(term) {
    const response = await ("https://api.unsplash.com/search/photos",
    {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 88Tf7pl3yDrj6P95llvwyY0IgHVuSV2DsQiIVKx2qpU",
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "100px" }}>
        {" "}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;
