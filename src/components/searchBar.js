import React, { Component } from "react";

class searchBar extends Component {
  /* listen for typing */
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("input was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default searchBar;
