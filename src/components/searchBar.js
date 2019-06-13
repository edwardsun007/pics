import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  /* listen for typing */
  //state = { term: "" }; // search term

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      term: ""
    };
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  onInputChange(event) {
    console.log(event.target.value);
  }

  /*
    var apikey = 'wiopv1QEmVomgnaELq1YRjomVtm0Gana',
		baseUrl = 'https://api.giphy.com',
		url = '/v1/gifs/search';
    http://api.giphy.com/v1/gifs/search?q=SEARCH&api_key=YOUR_API_KEY&limit=VAL"

*/
  onTyping = event => {
    event.preventDefault();
    console.log(event.target.value);
    // directly call props.onChange and pass the target.value
    this.props.onChange(event.target.value);
    //this.setState({ term: event.target.value });

    // let query = event.target.value;
    // let per_page = 5;
    // let client_id =
    //   "a611e9939cbbe30ff2cc8aa53beb512b17142d324758dde8d016c06937f8bd81";
    // const response = await axios.get(
    //   `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&per_page=${per_page}`
    //   /*,{
    //       params: {query: term},
    //       headers: {
    //         Authorization: 'Client-ID xxxxxx'
    //       }
    //     }
    //     */
    // );
    //this.setState({ images: response.data.results });
    // .then(res => {
    //   console.dir(res.data.results);
    // });
  };
  //value={this.state.term}
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="ui large header">Assignment</div>
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label htmlFor="">
                Type your search term for the gif here...
              </label>
              <input type="text" onChange={this.onTyping} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
