import React, { useState } from 'react'

export let dataBase = [''];
let wordTransfer = '';

export function AddBox() {
    let [addBoxInput, setaddBoxInput] = useState('');
    wordTransfer = addBoxInput

    return (
        <div>
            <input onChange={e => setaddBoxInput( e.target.value )}></input>
        </div>
    )
}

export function AddButton() {
    let [word, setWord] = useState([]);
    dataBase.push(word);
    dataBase.map((value, index) => {});
   
    return (
        <div>
            <button onClick={() => setWord(wordTransfer)}>Add Button</button>
        </div>
    )
}
