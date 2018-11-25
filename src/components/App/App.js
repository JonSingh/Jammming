import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      playlist: [],
      playlistName: "",
      accessToken: "",
      searchTerm:""
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
    this.updateSearchTerm = this.updateSearchTerm.bind(this)

}

  addTrack(track) {
    let newPlaylist = this.state.playlist
    if (newPlaylist.find(savedTrack => savedTrack.id === track.id)) {return}
    newPlaylist.push(track)
    this.setState({playlist: newPlaylist})
  }
  removeTrack(track){
    let newPlaylist = []
    newPlaylist = this.state.playlist.filter(savedTrack => {
      return savedTrack.id !== track.id
      })    
    this.setState({playlist: newPlaylist})
  }

  updatePlaylistName(name){
    this.setState({playlistName:name})
  }

  updateSearchTerm(term){
    this.setState({searchTerm: term})
  }

  getAccessToken(){
    this.setState({accessToken: Spotify.getAccessToken()})
  }

  getSearchResults(term){
    Spotify.search(term, this.state.accessToken).then(tracks => {
      this.setState({searchResults: tracks})
    })
    

    //debugger
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar getToken={this.getAccessToken} token={this.state.accessToken} getSearchResults={this.getSearchResults} searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} addTrack={this.addTrack}/>
            <Playlist playlist={this.state.playlist} playlistName={this.state.playlistName} removeTrack={this.removeTrack} onNameUpdate={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
