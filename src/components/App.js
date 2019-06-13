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
    // data.images. downsized.url  348x328
    let limit = 10;
    let apikey = "wiopv1QEmVomgnaELq1YRjomVtm0Gana";
    let baseURL = "https://api.giphy.com";

    const res = await axios.get(
      `${baseURL}/v1/gifs/search?q=${term}&api_key=${apikey}&limit=${limit}`
    );

    console.log(res.data.data);
    this.setState({ images: res.data.data });
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
