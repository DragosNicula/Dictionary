import React from 'react'
import { AddBox, AddButton } from './AddBox.jsx'
import { SearchBox, SearchButton } from './SearchBox.jsx'

function Dictionary() {
    return(
        <div>
            <h1>Dictionary App</h1>
            <h3>Enter your word in the box below</h3>
            <AddBox />
            <br></br>
            <AddButton />
            <h3>Search your word in the dictionary</h3>
            <SearchBox />
            <br></br>
            <SearchButton />
        </div>
    )
}

export default Dictionary