import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './search-input.css';

class SearchInput extends Component {
  constructor() {
    super();

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();

    this.props.history.push(`/search/${event.target.query.value}`);
  }

  render() {
    return (
      <form className="SearchInput" onSubmit={this.handleSearch}>
        <i className="fa fa-search" aria-hidden="true" />
        <input name="query" type="text" placeholder="Search" />
      </form>
    );
  }
}

export default withRouter(SearchInput);
