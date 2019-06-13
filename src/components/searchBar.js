import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  /* listen for typing */
  //state = { term: "" }; // search term

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      term: "",
      quality: ""
    };
  }

  // onFormSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state.term);
  // };

  onSelect = event => {
    console.log(event.target.value);
    this.setState({ quality: event.target.value });
  };

  onTyping = event => {
    event.preventDefault();
    console.log(event.target.value);
    // directly call props.onChange and pass the target.value
    this.props.onChange(event.target.value);

    //this.setState({ images: response.data.results });
    // .then(res => {
    //   console.dir(res.data.results);
    // });
  };
  //value={this.state.term}
  render() {
    return (
      <div className="ui container">
        <div className="ui large header">Assignment</div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">
              Type your search term and select image quality here...
            </label>
            <div className="ui input">
              <input type="text" onChange={this.onTyping} />
              <select onChange={this.onSelect}>
                <option value="low">Low Quality</option>
                <option value="mid">Medium Quality</option>
                <option value="high">High Quality</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
