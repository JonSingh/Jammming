import React from 'react'
import './Track.css'

class Track extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div className='Track'>
                <p className='Track-information'>
                    Track Title
                    <br/>
                    <h3>Artist | Album</h3>                    
                </p>
            </div>
        )
    }
}

export default Track
