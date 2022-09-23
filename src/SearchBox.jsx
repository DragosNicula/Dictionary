import React, { useState } from 'react'
export let searchBoxInput = '';

export function SearchBox() {
    let [userInputSearchBox, setUserInputSearchBox] = useState('');
    searchBoxInput = userInputSearchBox;

    function updateSearchBox(event) {
        setUserInputSearchBox(event.target.value);
    }

    return(
        <div>
            <input type='text' onChange={(event) => updateSearchBox(event)}></input>
        </div>
    )
}