import React, { useState } from 'react';
import { Button } from './Button';
import { InputBox } from './InputBox';


export function AddBox(props) {
    let [addWord, setAddWord] = useState('');

    function updateDataBase() {
        props.setDataBase(oldArray => [...oldArray, addWord]);
    }

    return(
        <div>
            <InputBox  change={(e) => setAddWord(e.target.value)} placeholder={"Add word here..."}/>
            <br></br>
            <Button class={"btn btn-outline-danger"} name={"Add Button"} event={updateDataBase}/>
        </div>
    )
}