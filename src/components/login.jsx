import React from 'react';
import './login.css';

const Login = ({ gAuthInstance }) => (
  <div className="login">
    <div className="inner">
      {gAuthInstance ? (
        <div>
          <h1>Jukebox</h1>
          <button className="youtube-button" onClick={gAuthInstance.signIn}>
            <i className="fa fa-youtube-play" aria-hidden="true" /> Sign in to YouTube
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  </div>
);

export default Login;
