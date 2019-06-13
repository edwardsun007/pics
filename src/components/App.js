import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: []
  };

  onSearchChange = async term => {
    console.log(term);

    let per_page = 5;
    let client_id =
      "a611e9939cbbe30ff2cc8aa53beb512b17142d324758dde8d016c06937f8bd81";
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${term}&per_page=${per_page}`
    );

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onChange={this.onSearchChange} />
        <p>{this.state.images.length}</p>
        {this.state.images.length > 0 && (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
