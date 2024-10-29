import './index.css'

const SuggestionItem=(props)=>{

    const {details,enterSearchInput}=props
    const {suggestion}=details

    const handleClick=()=>{
        enterSearchInput(suggestion)

    }
    return(
        <li className="list-item">
            <p className="suggestion">{suggestion}</p>
            <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"  alt="cross" className="arrow-img" onClick={handleClick}/>
        </li>
    )
}

export default SuggestionItem