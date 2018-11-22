import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{name:'name 1',artist:'artist 1', album:'album 1', id:'0'},{name:'name 2',artist:'artist 2', album:'album 2', id:'1'}]
  }
}

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
