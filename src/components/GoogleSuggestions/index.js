import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component{
    state={searchInput:''}

    onChangeSearchInput=event=>{
        this.setState({searchInput:event.target.value})
    }

    clearSearchInput=()=>{
        this.setState({searchInput:''})
    }

    enterSearchInput=(suggestion)=>{
        this.setState({searchInput:suggestion})
    }

    render(){
        const {searchInput}=this.state
        const {suggestionsList}=this.props
        const searchResult=suggestionsList.filter(eachItem=>eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()))

        return(
            <div className="bg-container">
            <div className="card-container">
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png " alt="google-logo" className="google-img"/>
                <div className="search-items-container">
                   <div className="search-input-container">
                       <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="search-icon" className="search-icon"/>
                        <input type="text" className="search-input-box" value={searchInput} onChange={this.onChangeSearchInput} placeholder='Search Google'/>
                        <button className="delete-icon" onClick={this.clearSearchInput} >
                            <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" className="cross-img"/>
                        </button>
                    </div>
                    <ul>
                    {searchResult.map(eachItem=>(<SuggestionItem details={eachItem} key={eachItem.id} enterSearchInput={this.enterSearchInput} />))}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default GoogleSuggestions