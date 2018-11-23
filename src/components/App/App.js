import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{name:"Some Song Name",album:"The Reverent Jorfy (Live)",artist:"Andy Gordon",id:"spotify:track:2mlNUVIHh7zm66aMx3U2Nv"}],
      playlist: [{name:"A different song name",album:"The Reverent Porfy (Dead)",artist:"Gandy Ordon",id:"spotify:track:2kjfs89d7fsidfuooisu"}],
      playlistName: "Taco's Slow Chili"
    }
    this.addTrack = this.addTrack.bind(this)

}

  addTrack(track) {
    let newPlaylist = this.state.playlist
    if (newPlaylist.find(savedTrack => savedTrack.id === track.id)) {return}
    newPlaylist.push(track)
    this.setState({playlist: newPlaylist})
  }

  removeTrack(track){
    let newPlaylist = this.state.playlist
    newPlaylist = newPlaylist.filter(savedTrack => savedTrack === track.id)
    this.setState({playlist: newPlaylist})
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} addTrack={this.addTrack}/>
            <Playlist playlist={this.state.playlist} playlistName={this.state.playlistName} removeTrack={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
