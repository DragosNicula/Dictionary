import React, { useState } from 'react';
import { AddBox } from './Addbox.jsx'
import { SearchBox } from './Searchbox.jsx'

export function Dictionary() {
    let [dataBase, setDataBase] = useState([]);
    
    return(
        <div>
            <h1>Dictionary App</h1>
            <AddBox dataBase={dataBase}/>
            <br></br>
            <SearchBox dataBase={dataBase}/>
        </div>
    )
}