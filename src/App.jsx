import React from 'react'
import { AddBox } from './AddBox.jsx'
import { SearchBox } from './SearchBox.jsx'
import { Message } from './Message.jsx';

function App() {
    return(
        <div>
            <h1>Dictionary App</h1>
            <h3>Enter your word in the box below</h3>
            <AddBox />
            <h3>Search your word in the dictionary</h3>
            <SearchBox />
            <Message />
        </div>
    )
}

export default App