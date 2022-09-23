import React, { useState } from 'react';
import { searchBoxInput } from './SearchBox.jsx'
import { dataBase }  from './AddBox.jsx'

export function Message() {
    let [message, setMessage] = useState('');

    function updateMessage() {
        for (let i = 0; i <= dataBase.length; ++i) {
            if (searchBoxInput === dataBase[i]) {
                setMessage('Your word is in the dictionary');
                break;
            } else {
                setMessage('Your word is not the dictionary');
            }
        }
    }
    
    return(
        <div>
            <br></br>
            <button onClick={() => updateMessage()}>Search Word</button>
            <h2>{message}</h2>
        </div>
    )
}