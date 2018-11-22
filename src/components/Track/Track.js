import React from 'react'
import './Track.css'

class Track extends React.Component {

    render() {
        return(
            <div className='Track'>
                <div className="Track-information">
                    <h3>Test Track Name</h3>                
                    <p>Test Artist | Test Album</p>
                </div>
                <a class="Track-button">+</a>
            </div>
        )
    }
}

export default Track
