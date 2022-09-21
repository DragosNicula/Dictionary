import React, { useState } from 'react'

export let kappa = [''];
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
    kappa.push(word);
    kappa.map((value, index) => {});
   
    return (
        <div>
            <button onClick={() => setWord(wordTransfer)}>Add Button</button>
        </div>
    )
}
