import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{name:"name",album:"album",artist:"artist",id:0},{name:"name 2",album:"album 2",artist:"artist 2",id:1}],
      playlist: [{name:"name 3",album:"album 3",artist:"artist 3",id:3}]
  }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
}

  addTrack(track) {
    this.setState({playlist: this.state.playlist.push(track)})
  }

  removeTrack(track) {
    this.setState({playlist: this.state.playlist.filter(function(value, index, arr){
      return (value != track)
    })})
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} addTrack={this.addTrack}/>
            <Playlist playlist={this.state.playlist} removeTrack={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
