import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {

    render() {
        return(
            <div className='SearchBar'>
                <div className='SearchBar-input'>
                    <input placeholder="Search by artist, title or album" />
                </div>
                <div className='SearchBar-submit'>
                    <a>SEARCH</a>
                </div>
            </div>
        )
    }
}

export default SearchBar
