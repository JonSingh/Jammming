import React from 'react'
import './SearchResults.css'
import '../TrackList/TrackList'
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    render(){
        return(
            <div className='SearchResults'>
                <h2>Results</h2>
                <br/>
                <TrackList tracks={this.props.tracks} isSearchResult={true} addTrack={this.props.addTrack}/>            
            </div>

        )
    }
}

export default SearchResults