import React, { useState } from 'react';
import { Button } from './Button.jsx';

export function Verification(props) {
    let [message, setMessage] = useState('');

    function updateMessage() {
        if (props.dataBase.includes(props.searchWord) === true) {
            setMessage("The word is in the dictionary");
        } else {
            setMessage("The word is NOT in the dictionary");
        }
    }

    return(
        <div>
            <br></br>
            <Button class={"btn btn-outline-danger"} name={"Search Button"} event={updateMessage}/>
            <br></br>
            <h2>{message}</h2>
        </div>
    )
}