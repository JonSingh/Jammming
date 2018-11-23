import React from 'react'
import './Track.css'

class Track extends React.Component {
    constructor(props){
        super(props)
        this.handleAddTrack = this.handleAddTrack.bind(this)
        this.handleRemoveTrack = this.handleRemoveTrack.bind(this)
    }

    handleAddTrack(track) {
        this.props.addTrack(track)
    }

    handleRemoveTrack(track) {
        this.props.removeTrack(track)
    }

    renderAction() {
        if(this.props.isPlaylist){
            return <a className="Track-action" onClick="">-</a>
        }
        else{
            return <a className="Track-action" onClick={this.handleAddTrack(this.props.track)}>+</a>
        }
    }

    render() {
        return(
            <div className='Track'>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>                
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track
