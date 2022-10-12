import React, { useState } from 'react';
import { Verification } from './Verification.jsx';


export function SearchBox(props) {
    let [searchWord, setSearchWord] = useState(' ');

    return(
        <div>
            <input type="text" onChange={(e) => setSearchWord(e.target.value)}></input>
            <Verification searchWord={searchWord} dataBase={props.dataBase}/>
        </div>
    )
}