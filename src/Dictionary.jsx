import React, { useState } from 'react';
import { AddBox } from './Addbox.jsx'
import { SearchBox } from './Searchbox.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Dictionary() {
    let [dataBase, setDataBase] = useState([]);
    
    return(
        <div>
            <br></br>
            <h1>Dictionary App</h1>
            <br></br>
            <AddBox dataBase={dataBase} setDataBase={setDataBase}/>
            <br></br>
            <SearchBox dataBase={dataBase}/>
            
        </div>
    )
}