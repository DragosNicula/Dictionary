import React, { useState } from 'react'
export let dataBase = [];

export function AddBox() {
    let [userInputAddBox, setUserInputAddBox] = useState('');

    function updateInput(event) {
        setUserInputAddBox(event.target.value)
    }
    
    function DataBaseUpdate() {
        dataBase.push(userInputAddBox);
        dataBase.map((value, index) => {});
    }
    
    return (
        <div>
            <input type='text' onChange={(event) => updateInput(event)}></input>
            <br></br>
            <br></br>
            <button onClick={() => DataBaseUpdate()}>Add Button</button>
        </div>
    )
}


