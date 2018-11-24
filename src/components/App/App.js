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
      accessToken: ""
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)

}

  addTrack(track) {
    let newPlaylist = this.state.playlist
    if (newPlaylist.find(savedTrack => savedTrack.id === track.id)) {return}
    newPlaylist.push(track)
    this.setState({playlist: newPlaylist})
  }

  removeTrack(track){
    //debugger
    console.log("Playlist before filter: "+ this.state.playlist[0].name)
    let newPlaylist = this.state.playlist.filter(savedTrack => {
      console.log(savedTrack.id)
      console.log(track.id)
      console.log(savedTrack.id === track.id)
      return savedTrack.id === track.id
    })
    console.log("New playlist after filter: "+ newPlaylist[0].name)
    this.setState({playlist: newPlaylist})
  }

  updatePlaylistName(name){
    this.setState({playlistName:name})
  }

  getAccessToken(){
    this.setState({accessToken: Spotify.getAccessToken()})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar getToken={this.getAccessToken} token={this.state.accessToken} />
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
