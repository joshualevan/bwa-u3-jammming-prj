import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange}/>
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }

  search() {
    this.props.onSearch();
  }

  handleTermChange(e) {
    this.props.onTermChange(e.target.value);
  }
}

export default SearchBar;
//exports to App.js > index.js
