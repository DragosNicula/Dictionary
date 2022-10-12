import React, { useState } from 'react';

export function AddBox(props) {
    let [addWord, setAddWord] = useState('');

    function updateDataBase() {
        props.dataBase.push(addWord);
    }

    return(
        <div>
            <input type="text" onChange={(e) => setAddWord(e.target.value)}></input>
            <br></br>
            <br></br>
            <button onClick={() => updateDataBase()}>Add Button</button>
        </div>
    )
}