import React, { Component } from 'react';
import PlaylistItem from './playlist-item';
import './playlist.css';

class Playlist extends Component {
  constructor() {
    super();

    this.state = {
      playlistItems: [],
    };

    this.getPlaylistItems = this.getPlaylistItems.bind(this);
  }

  componentDidMount() {
    const playlistId = this.props.match.params.playlistId;

    this.getPlayListItems(playlistId);
  }

  componentWillReceiveProps(nextProps) {
    const playlistId = nextProps.match.params.playlistId;

    this.getPlayListItems(playlistId);
  }

  getPlayListItems(playlistId) {
    const youtube = window.gapi.client.youtube;
    youtube.playlistItems.list({
      playlistId,
      part: 'snippet,contentDetails',
      maxResults: 50,
    }).then(response => {
      const result = response.result;

      if (!result.items || !result.items.length) {
        return;
      }

      this.setState({
        playlistItems: result.items,
      });
    }).catch(error => console.log(error));
  }

  render() {
    const { playlistItems } = this.state;

    return (
      <div className="Playlist">
        {playlistItems.map(playlistItem => (
          <PlaylistItem
            key={playlistItem.id}
            title={playlistItem.snippet.title}
            videoId={playlistItem.contentDetails.videoId}
          />
        ))}
      </div>
    );
  }
}

export default Playlist;
