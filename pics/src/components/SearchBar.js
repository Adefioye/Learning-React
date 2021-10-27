import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="/" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* // The below can be useful for handling event that returns just one-liner comment */}
            {/* <input
              type="text"
              onChange={(event) => console.log(event.target.value)}
            /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
