import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(){
        if(this.props.token) {
            console.log("I'm trying to search!")
        }
        else{
            this.props.getToken()
        }
    }

    render() {
        return(
            <div className='SearchBar'>
                <div className='SearchBar-input'>
                    <input placeholder="Search by artist, title or album" />
                </div>
                <div className='SearchBar-submit'>
                    <a onClick={this.handleOnClick}>SEARCH</a>
                </div>
            </div>
        )
    }
}

export default SearchBar
