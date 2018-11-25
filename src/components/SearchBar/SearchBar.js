import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnClick(){
        if(this.props.token) {
            this.props.getSearchResults(this.props.searchTerm)
        }
        else{
            this.props.getToken()
        }
    }

    handleOnChange(e){
        this.props.updateSearchTerm(e.target.value)
    }

    render() {
        return(
            <div className='SearchBar'>
                <div className='SearchBar-input'>
                    <input onChange={this.handleOnChange} placeholder="Search by artist, title or album" />
                </div>
                <div className='SearchBar-submit'>
                    <a onClick={this.handleOnClick}>SEARCH</a>
                </div>
            </div>
        )
    }
}

export default SearchBar
