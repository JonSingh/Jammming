import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends React.Component {
    render() {
        const isSearchResult = this.props.isSearchResult
        const isPlaylist = this.props.isPlaylist
        let tracklist

        if(isSearchResult || isPlaylist) {
            tracklist = this.props.tracks.map(track => {
                return <Track track={track} key={track.id} isPlaylist={isPlaylist} isSearchResult={isSearchResult} addTrack={this.props.addTrack}/>
            })
        }
        return(
            <div className="TrackList">
                {tracklist}
            </div>
        )
    }
}
            

export default TrackList