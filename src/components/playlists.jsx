import React from 'react';
import { Link } from 'react-router-dom';
import './playlists.css';

const Playlists = ({ playlists }) => (
  <div className="Playlists">
    {playlists.map(playlist => (
      <Link key={playlist.id} to={`/playlists/${playlist.id}`} className="playlist">
        {playlist.snippet.title}
      </Link>
    ))}
  </div>
);

export default Playlists;
