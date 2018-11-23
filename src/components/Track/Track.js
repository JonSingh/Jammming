import React from 'react'
import './Track.css'

class Track extends React.Component {
    constructor(props){
        super(props)
        this.handleAddTrack = this.handleAddTrack.bind(this)
        this.handleRemoveTrack = this.handleRemoveTrack.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleAddTrack(track) {
        this.props.addTrack(track)
    }

    handleRemoveTrack(track) {
        this.props.removeTrack(track)
    }

    renderAction() {return (this.props.isPlaylist ? "-" : "+")}

    //I know this is wrong, since both those functions should receive track, but doing so causes everything to crash.
    //Why does this even work a little bit?!
    handleOnClick(track) {return (this.props.isPlaylist ? this.handleRemoveTrack : this.handleAddTrack)}

    render() {
        return(
            <div className='Track'>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>                
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <a className="Track-action" onClick={this.handleOnClick(this.props.track)}>{this.renderAction()}</a>
            </div>
        )
    }
}

export default Track
