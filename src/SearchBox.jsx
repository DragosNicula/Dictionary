import React, { useState } from 'react';
import { SearchWord } from './SearchWord.jsx';
import { InputBox } from './InputBox';


export function SearchBox(props) {
    let [searchWord, setSearchWord] = useState('');

    return(
        <div>
            <InputBox  change={(e) => setSearchWord(e.target.value)} placeholder={"Search word here..."}/>
            <SearchWord searchWord={searchWord} dataBase={props.dataBase}/>
        </div>
    )
}