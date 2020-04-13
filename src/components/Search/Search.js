import React,{useState} from 'react'

const Search = props => {
    const [txtinput, setTxtinput] = useState("")

    const handleTxt = e => {
            setTxtinput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        props.history.push(`/result?keyword=${txtinput}`)
    }

    return (
        <form onSubmit={handleSubmit}>
           <input type="search" placeholder="search keyword..." value={txtinput} onChange={handleTxt}/>
           <button>Search</button>
        </form>
    )
}

export default Search;
