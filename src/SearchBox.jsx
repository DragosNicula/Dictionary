import React, { useState } from 'react'
import { dataBase } from './AddBox.jsx'

let word = '';

export function SearchBox() {
    let [searchBoxInput, setSearchBoxInput] = useState();
    word = searchBoxInput;

    return(
        <div>
            <input onChange={e => setSearchBoxInput(e.target.value)}></input>
        </div>
    )
}

export function SearchButton() {
    let [message, setMessage] = useState([''])
    function updateMessage() {
        for (let i = 1; i <= dataBase.length; ++i) {
            if (word === dataBase[i]) {
                setMessage('Your word is in the dictionary')
                break;
            } else {
                setMessage('Your word is not in the dictionary')
            }
        }
    }

    return(
        <div>
            <button onClick={() => updateMessage()}>Search Button</button>
            <h2>{ message }</h2>
        </div>
    )
}
