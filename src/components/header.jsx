import React from 'react';
import SearchInput from './search-input';
import './header.css';

const Header = props => (
  <div className="header">
    <div className="logo">
      <i className="fa fa-music" aria-hidden="true" />
      Jukebox
    </div>
    <div className="search">
      <SearchInput />
    </div>
    <div className="logout">
      <i className="fa fa-sign-out" aria-hidden="true" onClick={props.onSignOut} />
    </div>
  </div>
);

export default Header;
