import React from 'react'
import './Track.css'

class Track extends React.Component {
    constructor(props){
        super(props)
        this.handleAddTrack = this.handleAddTrack.bind(this)
    }

    handleAddTrack(track) {
        this.props.addTrack(this.props.track)
    }

    render() {
        let button
        if(this.props.isPlaylist) {
            button = <a class="Track-button">-</a>
        }
        else{
            button = <a class="Track-button" onClick={this.handleAddTrack}>+</a>
        }

        return(
            <div className='Track'>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>                
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {button}
            </div>
        )
    }
}

export default Track
