import React, { useState } from 'react';


export function Verification(props) {
    let [message, setMessage] = useState('');

    function updateMessage() {
        for (let i = 0; i < props.dataBase.length; ++i) {
            if (props.searchWord === props.dataBase[i]) {
                setMessage('The word is in the dictionary');
                break;
            } else {
                setMessage('The word is NOT in the dictionary');
            }
        }
    }

    return(
        <div>
            <br></br>
            <button onClick={() => updateMessage()}>Search Word</button>
            <h1>{message}</h1>
        </div>
    )
}